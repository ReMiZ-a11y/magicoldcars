const heroSlider = {
  name: "heroSlider",
  type: "document",
  title: "Hero Slider",
  fields: [
    {
      name: "name",
      title: "Banner Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "discount",
      title: "Subtitle",
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
      title: "Image",
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
        title: title || postTitle || "Hero Slider",
        subtitle: postTitle,
        media: image,
      };
    },
  },
};

export default heroSlider;