
import BlogDetailsWithSidebar from "@/components/BlogDetailsWithSidebar";
import { getPost } from "@/sanity/sanity-blog-utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog Details | Magic Old Cars",
  description: "Blog Magic Old Cars",
};

export const dynamic = "force-dynamic";

export default async function BlogDetailsWithSidebarPage() {
  const slug = "cooking-masterclass-creating-delicious-italian-pasta";

  const blogData = await getPost(slug);

  if (!blogData) {
    notFound();
  }

  return (
    <main>
      <BlogDetailsWithSidebar blogData={blogData} />
    </main>
  );
}
