import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
title: "Logowanie | Magic Old Cars – Klub Motoryzacyjny",
description: "Zaloguj się do Magic Old Cars, aby uzyskać dostęp do swojego konta i korzystać z funkcji naszego klubu miłośników klasycznej motoryzacji.",
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
