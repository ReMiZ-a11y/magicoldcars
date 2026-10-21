import BlogDetails from "@/components/BlogDetails";
import { getPost } from '@/sanity/sanity-blog-utils';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Artykuły i aktualności | Magic Old Cars – Klub Motoryzacyjny",
  description:
    "Czytaj artykuły o klasycznej motoryzacji, poznawaj historię zabytkowych samochodów i odkrywaj relacje ze zlotów oraz wydarzeń organizowanych przez społeczność Magic Old Cars.",
  // other metadata
};

const BlogDetailsPage = async () => {
  const slug = "cooking-masterclass-creating-delicious-italian-pasta";

  const blogData = await getPost(slug);

  return (
    <main>
      <BlogDetails blogData={blogData} />
    </main>
  );
};

export default BlogDetailsPage;
