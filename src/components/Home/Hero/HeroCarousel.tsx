"use client";

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
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {sliders?.map((slider: any, key: number) => {
        const post = slider?.post;
        const postSlug = post?.slug?.current;
        const postTitle = post?.title || slider?.name || "Blog post";
        const postUrl = postSlug ? `/blogs/${postSlug}` : null;
        const publishedAt = post?.publishedAt;

        return (
          <SwiperSlide key={slider?._id || key}>
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
                  {postUrl ? (
                    <Link href={postUrl} className="hover:underline">
                      {postTitle}
                    </Link>
                  ) : (
                    postTitle
                  )}
                </h1>

                <p className="text-sm text-white/80">
                  Data Publikacji{" "}
                  {publishedAt
                    ? new Date(publishedAt).toLocaleDateString("pl-PL")
                    : "Brak daty publikacji"}
                </p>

                {postUrl && (
                  <Link
                    href={postUrl}
                    className="mt-6 inline-flex rounded-full bg-blue px-9 py-3 text-custom-sm font-medium text-white duration-200 ease-out hover:bg-blue-dark sm:mt-10"
                  >
                    Przeczytaj wiecej
                  </Link>
                )}
              </div>

              {slider?.image && (
                <Image
                  src={imageBuilder(slider.image).url()}
                  width={981}
                  height={533}
                  loading="eager"
                  className="max-h-[533px] w-full rounded-[10px] object-cover"
                  alt={postTitle}
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