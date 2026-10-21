import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { structuredAlgoliaHtmlData } from '@/algolia/crawlIndex';
import BlogDetails from '@/components/BlogDetails';
import { getPost, getPosts } from '@/sanity/sanity-blog-utils';
import { imageBuilder } from '@/sanity/sanity-shop-utils';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.magicoldcars.pl'
).replace(/\/+$/, '');

const SITE_NAME = 'Magic Old Cars';
const DEFAULT_DESCRIPTION =
  'Odkrywaj świat klasycznej motoryzacji, poznawaj wyjątkowe samochody i dołącz do społeczności Magic Old Cars.';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts
    .filter((post) => Boolean(post.slug?.current))
    .map((post) => ({
      slug: post.slug.current,
    }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: `Nie znaleziono artykułu | ${SITE_NAME}`,
      description: 'Szukany artykuł nie istnieje lub został usunięty.',
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title = post.title || 'Artykuł na blogu';
  const description =
    post.metadata?.trim().slice(0, 160) || DEFAULT_DESCRIPTION;

  const canonicalUrl = `${SITE_URL}/blogs/${slug}`;

  let imageUrl: string | undefined;

  if (post.mainImage) {
    try {
      imageUrl = imageBuilder(post.mainImage).url();
    } catch {
      imageUrl = undefined;
    }
  }

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    authors: [{ name: SITE_NAME }],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'article',
      locale: 'pl_PL',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                alt: title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title: `${title} | ${SITE_NAME}`,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

export default async function BlogDetailsPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  // Indeksowanie w Algolii nie powinno blokować wyświetlenia artykułu.
  try {
    const imageURL = post.mainImage
      ? imageBuilder(post.mainImage).url()
      : '';

    await structuredAlgoliaHtmlData({
      type: 'blogs',
      title: post.title || '',
      htmlString: post.metadata || '',
      pageUrl: `${SITE_URL}/blogs/${slug}`,
      imageURL,
    });
  } catch (error) {
    console.error('Błąd indeksowania artykułu w Algolii:', error);
  }

  return (
    <main>
      <BlogDetails blogData={post} />
    </main>
  );
}