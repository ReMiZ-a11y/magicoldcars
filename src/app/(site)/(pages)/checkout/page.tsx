import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
export const metadata: Metadata = {
title: "Zamówienie | Magic Old Cars – Klub Motoryzacyjny",
description: "Sfinalizuj zamówienie w Magic Old Cars. Sprawdź szczegóły zamówienia i przejdź do bezpiecznej realizacji zakupów w naszym sklepie motoryzacyjnym.",
// other metadata
};

const CheckoutPage = () => {
  return (
    <main>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
