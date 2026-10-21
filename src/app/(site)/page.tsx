import Newsletter from "@/components/Common/Newsletter";
import BestSeller from "@/components/Home/BestSeller";
import Categories from "@/components/Home/Categories";
import CountDown from "@/components/Home/Countdown";
import Hero from "@/components/Home/Hero";
import NewArrival from "@/components/Home/NewArrivals";
import PromoBanner from "@/components/Home/PromoBanner";
import Testimonials from "@/components/Home/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Old Cars | Sklep z Klasyczną Motoryzacją",
  description: "Strona główna sklepu internetowego Magic Old Cars – klasyczne auta, legendy PRL-u oraz gadżety motoryzacyjne",
  // inne metadane
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <CountDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
