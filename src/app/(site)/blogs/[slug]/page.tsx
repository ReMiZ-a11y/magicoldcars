import { structuredAlgoliaHtmlData } from '@/algolia/crawlIndex';
import BlogDetails from '@/components/BlogDetails';
import { getPost, getPosts } from '@/sanity/sanity-blog-utils';
import { imageBuilder } from '@/sanity/sanity-shop-utils';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

  if (post) {
    return {
    title: `${post.title || "Artykuł na blogu"} | Magic Old Cars – Klub Motoryzacyjny`,
      description: `${post.metadata?.slice(0, 136)}...`,
    author: "Magic Old Cars",
      alternates: {
        canonical: `${siteURL}/posts/${post?.slug?.current}`,
        languages: {
          'en-US': '/en-US',
          'pl-PL': '/pl-PL',
        },
      },

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },

      openGraph: {
        title: `${post.title} | MagicOldCars`,
        description: post.metadata,
        url: `${siteURL}/posts/${post?.slug?.current}`,
        siteName: 'MagicOldCars',
        images: [
          {
            url: imageBuilder(post.mainImage).url(),
            width: 1800,
            height: 1600,
            alt: post.title,
          },
        ],
        locale: 'pl_PL',
        type: 'article',
      },

      twitter: {
        card: 'summary_large_image',
        title: `${post.title} | MagicOldCars`,
        description: `${post.metadata?.slice(0, 136)}...`,
        creator: 'MagicOldCars',
        site: 'MagicOldCars',
        images: [imageBuilder(post?.mainImage).url()],
        url: `${siteURL}/blogs/${post?.slug?.current}`,
      },
    };
  } else {
    return {
      title: 'Nie Znaleziono',
      description: '',
    };
  }
}

const BlogDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const post = await getPost(slug);

  await structuredAlgoliaHtmlData({
    type: 'blogs',
    title: post?.title || '',
    htmlString: post?.metadata || '',
    pageUrl: `${process.env.SITE_URL}/blogs/${post?.slug?.current}`,
    imageURL: imageBuilder(post?.mainImage).url() as string,
  });

  return (
    <main>
      <BlogDetails blogData={post} />
    </main>
  );
};

export default BlogDetailsPage;
