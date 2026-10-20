
import Image from "next/image";
import Link from "next/link";

interface LargePromoBannerProps {
  imageUrl: string;
  subtitle: string;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

export default function LargePromoBanner({
  imageUrl,
  subtitle,
  title,
  description,
  link,
  buttonText,
}: LargePromoBannerProps) {
  return (
    <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
      {/* Treść banera */}
      <div className="relative z-10 max-w-[550px] w-full">
        <span className="block font-medium text-xl text-dark mb-3">
          {subtitle}
        </span>

        <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
          {title}
        </h2>

        <p>{description}</p>

        <Link
          href={link}
          className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-full ease-out duration-200 hover:bg-blue-dark mt-7.5"
        >
          {buttonText}
        </Link>
      </div>

      {/* Zdjęcie wyśrodkowane w pionie i przesunięte do środka */}
      <Image
        src={imageUrl}
        alt={title}
        width={460}
        height={590}
        sizes="(max-width: 1023px) 274px, (max-width: 1279px) 380px, 460px"
        className="relative z-0 mx-auto mt-10 h-auto w-[274px] lg:absolute lg:top-1/2 lg:right-28 lg:bottom-auto lg:mt-0 lg:w-[380px] lg:-translate-y-1/2 xl:right-36 xl:w-[460px]"
      />
    </div>
  );
}
