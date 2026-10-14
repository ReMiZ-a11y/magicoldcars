
const heroSlider = {
  name: "heroSlider",
  type: "document",
  title: "Hero Slider",

  fields: [
    {
      name: "name",
      title: "Slider Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "discount",
      title: "Label",
      description: "Optional text displayed above the blog post title",
      type: "string",
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
      name: "name",
      postTitle: "post.title",
      image: "image",
    },
    prepare(selection: any) {
      const { name, postTitle, image } = selection;

      return {
        title: name || "Hero Slider",
        subtitle: postTitle
          ? `Blog post: ${postTitle}`
          : "No blog post selected",
        media: image,
      };
    },
  },
};

export default heroSlider;
