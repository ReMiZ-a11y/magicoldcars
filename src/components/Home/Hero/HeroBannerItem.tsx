import { imageBuilder } from "@/sanity/sanity-shop-utils";
import Image from "next/image";
import Link from "next/link";

export default function HeroBannerItem({
  bannerItem,
  className,
}: {
  bannerItem: any;
  className?: string;
}) {
  const postSlug = bannerItem?.post?.slug?.current;

  return (
    <div
      className={`w-full relative rounded-[10px] px-6 py-4 sm:py-5 sm:px-7 ${className ?? ""}`}
    >
      <div className="flex justify-between gap-4">
        <div className="max-w-[153px] flex flex-col justify-between w-full">
          <h2 className="max-w-[153px] font-semibold text-dark text-[22px] hover:text-blue">
            {postSlug ? (
              <Link href={`/blogs/${postSlug}`}>
                {bannerItem?.name || bannerItem?.post?.title || "Przeczytaj artykuł"}
              </Link>
            ) : (
              bannerItem?.name || bannerItem?.post?.title || "Przeczytaj artykuł"
            )}
          </h2>

          <div>
            <span className="flex items-center gap-1 text-lg">
              <span className="font-medium text-dark text-custom-sm">
                {bannerItem?.discount || "Przeczytaj"}
              </span>
            </span>
            {postSlug && (
              <Link
                href={`/blogs/${postSlug}`}
                className="mt-2 inline-block font-semibold text-blue hover:underline"
              >
                Czytaj wpis →
              </Link>
            )}
          </div>
        </div>

        <div className="max-w-[180px] w-full">
          {bannerItem?.image && (
            <Image
              src={imageBuilder(bannerItem.image).url()}
              alt={bannerItem?.name || bannerItem?.post?.title || "Obraz wpisu"}
              width={180}
              height={210}
            />
          )}
        </div>
      </div>
    </div>
  );
}