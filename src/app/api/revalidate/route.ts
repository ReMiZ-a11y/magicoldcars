import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import {
  imageBuilder,
  getCategoryById,
} from "@/sanity/sanity-shop-utils";
import { updateIndex } from "@/algolia/crawlIndex";

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: { current?: string } | string;
      _id?: string;
      name?: string;
      shortDescription?: string;
      price?: number;
      discountedPrice?: number;
      previewImages?: any[];
      reviews?: any[];
      category?: { _ref?: string };
      colors?: any[];
      sizes?: any[];
      thumbnails?: any[];
      status?: string;
      description?: string;
      offers?: any[];
      customAttributes?: any[];
      _createdAt?: string;
      _updatedAt?: string;
      tags?: any[];
    }>(req, process.env.SANITY_HOOK_SECRET);

    if (!isValidSignature) {
      return NextResponse.json(
        { error: "Invalid Signature" },
        { status: 401 }
      );
    }

    if (!body?._type) {
      return NextResponse.json(
        { error: "Missing document type" },
        { status: 400 }
      );
    }

    // Odśwież cache dla konkretnego typu dokumentu.
    revalidateTag(body._type, { expire: 0 });

    // Dodatkowe tagi dla produktów.
    if (body._type === "product") {
      revalidateTag("product", { expire: 0 });
    }

    // Kategorie i elementy strony głównej.
    if (body._type === "category") {
      revalidateTag("category", { expire: 0 });
    }

    if (body._type === "heroBanner") {
      revalidateTag("heroBanner", { expire: 0 });
    }

    if (body._type === "heroSlider") {
      revalidateTag("heroSlider", { expire: 0 });
    }

    if (body._type === "countdown") {
      revalidateTag("countdown", { expire: 0 });
    }

    // Blog: dostosuj nazwy do rzeczywistych typów dokumentów w Sanity.
    if (
      body._type === "post" ||
      body._type === "blog" ||
      body._type === "blogPost"
    ) {
      revalidateTag("post", { expire: 0 });
      revalidateTag("blog", { expire: 0 });
      revalidateTag("blogPost", { expire: 0 });
    }

    // Aktualizuj Algolię wyłącznie dla produktów.
    if (body._type === "product") {
      const category = body.category?._ref
        ? await getCategoryById(body.category._ref)
        : null;

      const slug =
        typeof body.slug === "string"
          ? body.slug
          : body.slug?.current;

      const productUrl = slug
        ? `${process.env.SITE_URL}/products/${slug}`
        : "";

      const data = {
        type: "products",
        name: body.name || "",
        htmlString: body.shortDescription?.slice(0, 7000) || "",
        objectID: productUrl || body._id || "",
        url: productUrl,
        imageURL: body.previewImages?.[0]?.image
          ? imageBuilder(body.previewImages[0].image).url()
          : undefined,
        price: body.price,
        discountedPrice: body.discountedPrice,
        reviews: body.reviews,
        category: category?.title || null,
        colors: body.colors,
        sizes: body.sizes,
        _id: body._id,
        thumbnails: body.thumbnails,
        status: body.status,
        previewImages: body.previewImages,
        description: body.description,
        offers: body.offers,
        customAttributes: body.customAttributes,
        updatedAt: new Date().toISOString(),
        tags: body.tags,
      };

      if (body.name && productUrl) {
        await updateIndex(data);
      }
    }

    return NextResponse.json({
      status: "ok",
      revalidated: true,
      type: body._type,
      now: Date.now(),
    });
  } catch (error: unknown) {
    console.error("Sanity revalidation error:", error);

    return NextResponse.json(
      { error: "Revalidation failed" },
      { status: 500 }
    );
  }
}