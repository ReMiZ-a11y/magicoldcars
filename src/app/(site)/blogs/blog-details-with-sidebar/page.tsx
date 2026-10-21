import BlogDetailsWithSidebar from '@/components/BlogDetailsWithSidebar';
import { getPost } from '@/sanity/sanity-blog-utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Artykuł na blogu | Magic Old Cars – Klub Motoryzacyjny",
  description:
    "Poznaj fascynujący świat klasycznej motoryzacji. Czytaj artykuły o zabytkowych samochodach, odkrywaj historię motoryzacji i poznawaj relacje ze zlotów oraz wydarzeń Magic Old Cars.",
};

const BlogDetailsWithSidebarPage = async () => {
  const slug = 'cooking-masterclass-creating-delicious-italian-pasta';

  const blogData = await getPost(slug);

  if (!blogData) {
    notFound();
  }

  return (
    <main>
      <BlogDetailsWithSidebar blogData={blogData} />
    </main>
  );
};

export default BlogDetailsWithSidebarPage;