
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
  const publishedAt = bannerItem?.post?.publishedAt;

  return (
    <div
      className={`w-full relative rounded-[10px] px-6 py-4 sm:py-5 sm:px-7 ${className ?? ""}`}
    >
      <div className="flex justify-between gap-4">
        <div className="max-w-[153px] flex flex-col justify-between w-full">
          <h2 className="max-w-[153px] font-semibold text-dark text-[22px] hover:text-blue">
            {postSlug ? (
              <Link href={`/blogs/${postSlug}`}>
                {bannerItem?.post?.title || bannerItem?.name}
              </Link>
            ) : (
              <span>
                {bannerItem?.post?.title || bannerItem?.name}
              </span>
            )}
          </h2>

          <div>
            <span className="flex flex-col gap-1 text-lg">
              <span className="font-medium text-dark text-custom-sm">
                czas do przeczytania:
              </span>
              <span className="font-semibold text-lg text-blue">
                {publishedAt
                  ? new Date(publishedAt).toLocaleDateString("pl-PL")
                  : "Brak daty"}
              </span>
            </span>
          </div>
        </div>

        <div className="max-w-[180px] w-full">
          {bannerItem?.image && (
            <Image
              src={imageBuilder(bannerItem.image).url()}
              alt={bannerItem?.post?.title || bannerItem?.name || "Blog image"}
              width={180}
              height={210}
            />
          )}
        </div>
      </div>
    </div>
  );
}
