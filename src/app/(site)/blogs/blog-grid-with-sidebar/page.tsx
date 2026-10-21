import BlogGridWithSidebar from '@/components/BlogGridWithSidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog motoryzacyjny | Magic Old Cars",
  description:
    "Poznaj historie klasycznych samochodów, odkrywaj motoryzacyjne legendy i czytaj relacje ze zlotów oraz wydarzeń. Blog Magic Old Cars to miejsce dla miłośników klasycznej motoryzacji.",
  // other metadata
};

const BlogGridWithSidebarPage = () => {
  return (
    <>
      <BlogGridWithSidebar />
    </>
  );
};

export default BlogGridWithSidebarPage;
