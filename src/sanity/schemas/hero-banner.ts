
const heroBanner = {
  name: "heroBanner",
  type: "document",
  title: "Hero Banner",

  fields: [
    {
      name: "name",
      title: "Banner Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "post",
      title: "Blog Post",
      type: "reference",
      to: [{ type: "post" }],
      validation: (Rule: any) => Rule.required(),
    },
  ],

  preview: {
    select: {
      name: "name",
      postTitle: "post.title",
      image: "image",
    },
    prepare(selection: any) {
      const { name, postTitle, image } = selection;

      return {
        title: name || "Hero Banner",
        subtitle: postTitle
          ? `Blog post: ${postTitle}`
          : "No blog post selected",
        media: image,
      };
    },
  },
};

export default heroBanner;
