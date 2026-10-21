import Signup from "@/components/Auth/Signup";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
title: "Rejestracja | Magic Old Cars – Klub Motoryzacyjny",
description: "Dołącz do Magic Old Cars! Utwórz konto i stań się częścią społeczności miłośników klasycznej motoryzacji, zabytkowych samochodów i wyjątkowych wydarzeń motoryzacyjnych.",
  // other metadata
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;
