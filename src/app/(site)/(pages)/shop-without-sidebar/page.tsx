import Breadcrumb from "@/components/Common/Breadcrumb";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import { getProductsByFilter } from "@/sanity/sanity-shop-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
title: "Sklep | Magic Old Cars – Klub Motoryzacyjny",
description: "Odkryj sklep Magic Old Cars i poznaj ofertę produktów dla miłośników klasycznej motoryzacji. Znajdź wyjątkowe akcesoria i gadżety inspirowane światem zabytkowych samochodów.",
// other metadata
};

type PageProps = {
  searchParams: Promise<{
    sort: string;
  }>;
};

const ShopWithoutSidebarPage = async ({ searchParams }: PageProps) => {
  const { sort } = await searchParams;

  let sortQuery = "| order(publishedAt desc)";

  if (sort === "popular") {
    sortQuery = "| order(length(reviews) desc)";
  }

  const query = `*[_type == "product"] ${sortQuery}`;

  const data = await getProductsByFilter(query, ["product"]);

  return (
    <main>
      <Breadcrumb
        title={"Sprawdz Samochody"}
        pages={["shop", "/", "shop without sidebar"]}
      />
      <ShopWithoutSidebar key={sort} shopData={data} />
    </main>
  );
};

export default ShopWithoutSidebarPage;
