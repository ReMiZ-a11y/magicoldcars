
import { imageBuilder } from "@/sanity/sanity-shop-utils";
import { Blog } from "@/types/blogItem";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Categories from "../Blog/Categories";
import LatestPosts from "../Blog/LatestPosts";
import LatestProducts from "../Blog/LatestProducts";
import SearchForm from "../Blog/SearchForm";
import SocialShare from "../Blog/SocialShare";
import Tags from "../Blog/Tags";
import Breadcrumb from "../Common/Breadcrumb";

const BlogDetailsWithSidebar = ({
  blogData,
}: {
  blogData: Blog | null;
}) => {
  if (!blogData) {
    notFound();
  }

  const imageUrl = blogData.mainImage
    ? imageBuilder(blogData.mainImage).url()
    : "/images/blog/blog-5.png";

  return (
    <>
      <Breadcrumb
        title="Blog Details With Sidebar"
        pages={["blog details sidebar"]}
      />

      <section className="py-20 overflow-hidden bg-gray-2">
        <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 xl:px-0">
          <div className="flex flex-col gap-5 lg:gap-8 lg:flex-row">
            {/* Blog details */}
            <div className="w-full lg:w-2/3">
              <div className="rounded-[10px] overflow-hidden mb-7.5">
                <Image
                  className="rounded-[10px] h-[477px] w-full object-cover"
                  src={imageUrl || "/images/blog/blog-5.png"}
                  alt={blogData.title || "Blog image"}
                  width={800}
                  height={477}
                />
              </div>

              <div>
                <span className="flex items-center gap-3 mb-4">
                  <Link
                    href="#"
                    className="duration-200 ease-out hover:text-blue"
                  >
                    {blogData.publishedAt &&
                      new Date(blogData.publishedAt)
                        .toDateString()
                        .split(" ")
                        .slice(1)
                        .join(" ")}
                  </Link>

                  <span className="block w-px h-4 bg-gray-4" />

                  <Link
                    href="#"
                    className="duration-200 ease-out hover:text-blue"
                  >
                    300k Views
                  </Link>
                </span>

                <h2 className="mb-4 text-xl font-medium text-dark lg:text-2xl xl:text-custom-4xl">
                  {blogData.title}
                </h2>

                <div className="blog-details">
                  {blogData.body && (
                    <PortableText value={blogData.body as any} />
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-10 mt-10">
                  <div className="flex flex-wrap items-center gap-5">
                    <p>Tags:</p>

                    <ul className="flex flex-wrap items-center gap-3.5">
                      {blogData.tags?.map((tag, index) => (
                        <li key={`${tag}-${index}`}>
                          <Link
                            className="inline-flex px-4 py-2 capitalize duration-200 ease-out bg-white border rounded-full hover:text-white border-gray-3 hover:bg-blue hover:border-blue"
                            href={`/blogs/tags/${tag}`}
                          >
                            {tag}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <SocialShare slug={blogData.slug} />
                </div>
              </div>
            </div>

            {/* Blog sidebar */}
            <div className="w-full lg:w-1/3">
              <SearchForm />
              <LatestPosts />
              <LatestProducts />
              <Categories />
              <Tags />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsWithSidebar;
