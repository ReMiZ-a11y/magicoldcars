import React from "react";
import MailSuccess from "@/components/MailSuccess";

import { Metadata } from "next";
export const metadata: Metadata = {
title: "Wiadomość wysłana | Magic Old Cars – Klub Motoryzacyjny",
description: "Dziękujemy za kontakt z Magic Old Cars! Twoja wiadomość została wysłana. Wkrótce postaramy się odpowiedzieć. Do zobaczenia w świecie klasycznej motoryzacji.",
// other metadata
};

const MailSuccessPage = () => {
  return (
    <main>
      <MailSuccess />
    </main>
  );
};

export default MailSuccessPage;
