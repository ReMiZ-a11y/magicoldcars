const heroBanner = {
  name: "heroBanner",
  type: "document",
  title: "Hero Banner",
  fields: [
    {
      name: "name",
      title: "Banner Title",
      type: "string",
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    },
    {
      name: "image",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
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
      title: "name",
      postTitle: "post.title",
      image: "image",
    },
    prepare(selection: any) {
      const { title, postTitle, image } = selection;

      return {
        title: title || postTitle || "Hero Banner",
        subtitle: postTitle,
        media: image,
      };
    },
  },
};

export default heroBanner;