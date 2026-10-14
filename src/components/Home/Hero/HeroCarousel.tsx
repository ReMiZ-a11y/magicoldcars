import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { imageBuilder } from "@/sanity/sanity-shop-utils";

import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";

const HeroCarousal = ({ sliders }: any) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 32500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {sliders?.map((slider: any, key: number) => {
        const postSlug = slider?.post?.slug?.current;
        const postUrl = postSlug ? `/blogs/${postSlug}` : "#";
        const imageUrl = slider?.image
          ? imageBuilder(slider.image).url()
          : null;

        return (
          <SwiperSlide key={slider?._id ?? key}>
            <div className="relative">
              <div className="absolute left-8 top-1/2 z-10 max-w-[366px] -translate-y-1/2 lg:left-20">
                {slider?.discount && (
                  <div className="mb-5 flex items-center gap-4">
                    <span className="block text-lg font-medium uppercase text-white">
                      {slider.discount}
                    </span>
                  </div>
                )}

                <h1 className="mb-3 text-xl font-semibold text-white sm:text-[40px]">
                  {postSlug ? (
                    <Link href={postUrl}>
                      {slider?.name || slider?.post?.title || "Przeczytaj artykuł"}
                    </Link>
                  ) : (
                    slider?.name || slider?.post?.title || "Przeczytaj artykuł"
                  )}
                </h1>

                {slider?.description && (
                  <p className="text-sm text-white/80">
                    {slider.description.slice(0, 150)}
                  </p>
                )}

                {postSlug && (
                  <Link
                    href={postUrl}
                    className="mt-6 inline-flex rounded-full bg-blue px-9 py-3 text-custom-sm font-medium text-white transition-colors duration-200 ease-out hover:bg-blue-dark sm:mt-10"
                  >
                    Przeczytaj
                  </Link>
                )}
              </div>

              {imageUrl && (
                <Image
                  src={imageUrl}
                  width={981}
                  height={533}
                  loading={key === 0 ? "eager" : "lazy"}
                  className="max-h-[533px] w-full rounded-[10px] object-cover"
                  alt={slider?.name || slider?.post?.title || "Baner wpisu"}
                />
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroCarousal;