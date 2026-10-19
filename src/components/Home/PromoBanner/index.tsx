import Image from "next/image";
import Link from "next/link";
import LargePromoBanner from "./LargePromoBanner";
import SmallPromoBanner from "./SmallPromoBanner";

const TreadmillPromoBanner = () => {
  return (
    <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
      <Image
        src="/images/products/product-7-bg-1.png"
        alt="promo img"
        className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
        width={241}
        height={241}
      />
      <div className="text-right">
        <span className="block text-lg text-dark mb-1.5">
          Foldable Motorised Treadmill
        </span>
        <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
          Workout At Home
        </h2>
        <p className="font-semibold text-custom-1 text-teal">Flat 20% off</p>
        <Link
          href="#"
          className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-full ease-out duration-200 hover:bg-teal-dark mt-9"
        >
          Grab Now
        </Link>
      </div>
    </div>
  );
};

const WatchPromoBanner = () => {
  return (
    <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
      <Image
        src="/images/promo/promo-03.png"
        alt="promo img"
        className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
        width={200}
        height={200}
      />
      <div>
        <span className="block text-lg text-dark mb-1.5">
          Apple Watch Ultra
        </span>
        <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
          Up to <span className="text-orange">40%</span> off
        </h2>
        <p className="max-w-[285px] text-custom-sm">
          The aerospace-grade titanium case strikes the perfect balance of
          everything.
        </p>
        <Link
          href={`/products/apple-watch-ultra`}
          className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-full ease-out duration-200 hover:bg-orange-dark mt-7.5"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-0 ">
<LargePromoBanner
  imageUrl="/images/promo/promo-01.png"
  subtitle="Klasyki łączą pasja zbliża"
  title="DOŁĄCZ DO NAS"
  description="Kochasz klasyczną motoryzację? Dołącz do naszej społeczności, poznawaj pasjonatów, bierz udział w zlotach i wspólnie twórz historię motoryzacji."
  link="https://www.magicoldcars.pl/blogs/dolacz-do-klubu"
  buttonText="Dołącz"
/>
        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
  <SmallPromoBanner
    imageUrl="/images/promo/promo-02.png"
    subtitle="Wspieraj Magic Old Cars"
    title="Razem dla motoryzacyjnej pasji"
    discount="Każde wsparcie ma znaczenie"
    link="/blog/wsparcie"
    buttonText="Wesprzyj"
    bgColor="#DBF4F3"
    buttonColor="bg-orange hover:bg-orange-dark"
    rightAlign
  />

<SmallPromoBanner
  imageUrl="/images/promo/promo-3.png"
  subtitle="Piękno ktore zachwyca"
  title="Wynajmij klasyka"
  description="Marzysz o przejażdżce wyjątkowym samochodem? Sprawdź możliwość wynajmu klasyków na śluby, sesje zdjęciowe i inne wyjątkowe okazje."
  link="/blog/wynajem-samochodow"
  buttonText="Sprawdź"
  bgColor="#FFECE1"
  buttonColor="bg-orange hover:bg-orange-dark"
/>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
