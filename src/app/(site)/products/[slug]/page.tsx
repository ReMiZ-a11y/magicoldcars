import { structuredAlgoliaHtmlData } from "@/algolia/crawlIndex";
import ShopDetails from "@/components/ShopDetails";
import {
  getAllProducts,
  getProduct,
  imageBuilder,
} from "@/sanity/sanity-shop-utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: product?.slug?.current,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

  if (!product) {
    return {
      title: "Nie Znaleziono",
      description: "Nie znaleziono żadnego artykułu na blogu",
    };
  }

  return {
    title: `${
      product.name || "Samochody"
    } | Magic Old Cars – Klub Miłośników Klasycznej Motoryzacji"`,
    description: `${product?.shortDescription?.slice(0, 136)}...`,
    author: "ReMiZ-a11y.",
    alternates: {
      canonical: `${siteURL}/produkt/${product?.slug?.current}`,
      languages: {
        "pl-PL": "/pl-PL",
        "en-US": "/en-US",
      },
    },

    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      title: `${product?.name} | Magic Old Cars`,
      description: product.shortDescription,
      url: `${siteURL}/produkt/${product?.slug?.current}`,
      siteName: "Magic Old Cars",
      images: [
        {
          url: imageBuilder(product?.previewImages[0]?.image).url(),
          width: 1800,
          height: 1600,
          alt: product?.name,
        },
      ],
      locale: "pl_PL",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${product?.name} | Magic Old Cars`,
      description: `${product?.shortDescription?.slice(0, 136)}...`,
      creator: "@Magic Old Cars",
      site: "@Magic Old Cars",
      images: [imageBuilder(product?.previewImages[0]?.image).url()],
      url: `${siteURL}/produkt/${product?.slug?.current}`,
    },
  };
}

const ProductDetails = async ({ params }: Props) => {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  await structuredAlgoliaHtmlData({
    type: "produkt",
    title: product?.name,
    htmlString: product?.shortDescription,
    pageUrl: `${process.env.SITE_URL}/produkt/${product?.slug?.current}`,
    imageURL: imageBuilder(product?.previewImages[0]?.image).url() as string,
    price: product?.price,
    discountedPrice: product?.discountedPrice,
    reviews: product?.reviews.length,
    category: product?.category,
    colors: product?.colors as [],
    sizes: product?.sizes as [],
    _id: product?._id,
    thumbnails: product?.thumbnails,
    status: product?.status,
    previewImages: product?.previewImages,
  });

  return (
    <main>
      <ShopDetails product={product} />
    </main>
  );
};

export default ProductDetails;
