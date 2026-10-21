import React from "react";
import Error from "@/components/Error";

import { Metadata } from "next";
export const metadata: Metadata = {
title: "Wystąpił błąd | Magic Old Cars – Klub Motoryzacyjny",
description: "Przepraszamy, wystąpił nieoczekiwany błąd. Wróć na stronę główną Magic Old Cars i odkrywaj świat klasycznej motoryzacji, zabytkowych samochodów oraz wyjątkowych wydarzeń.",
// other metadata
};

const ErrorPage = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default ErrorPage;
