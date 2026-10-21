import React from "react";
import Cart from "@/components/Cart";

import { Metadata } from "next";
export const metadata: Metadata = {
title: "Koszyk | Magic Old Cars – Klub Miłośników Klasycznej Motoryzacji",
description:
  "Sprawdź produkty w koszyku Magic Old Cars. Przygotuj zamówienie i odkryj ofertę dla miłośników klasycznych samochodów oraz motoryzacyjnych pasji.",
  // other metadata
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
