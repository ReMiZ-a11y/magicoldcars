import React from "react";
import BlogGrid from "@/components/BlogGrid";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog | Magic Old Cars – Klub Motoryzacyjny",
  description:
    "Odkrywaj świat klasycznej motoryzacji na blogu Magic Old Cars. Czytaj artykuły o zabytkowych samochodach, poznawaj historie motoryzacyjnych legend i sprawdzaj relacje ze zlotów oraz wydarzeń dla pasjonatów klasyków.",
  // other metadata
};
const BlogGridPage = () => {
  return (
    <main>
      <BlogGrid />
    </main>
  );
};

export default BlogGridPage;
