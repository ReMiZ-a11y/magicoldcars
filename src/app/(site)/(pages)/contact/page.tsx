import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
title: "Kontakt | Magic Old Cars – Klub Motoryzacyjny",
description: "Skontaktuj się z Magic Old Cars. Porozmawiajmy o klasycznej motoryzacji, współpracy, zlotach i wydarzeniach dla miłośników zabytkowych samochodów.",
// other metadata
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
