import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
title: "Lista życzeń | Magic Old Cars – Klub Motoryzacyjny",
description: "Zapisuj ulubione produkty w liście życzeń Magic Old Cars. Zbieraj gadżety i akcesoria inspirowane klasyczną motoryzacją, aby łatwo wrócić do nich w dowolnym momencie.",
// other metadata
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
