const heroBanner = {
  name: "heroBanner",
  type: "document",
  title: "Hero Banner",
  fields: [
    {
      name: "name",
      title: "Banner Name",
      type: "string",
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
    /*internesuje mnie zmiana product na post  zakładam ze to link ktory przenosi  tylko czy trzeba zmienic jeszcze cos oprocz tego   */
    {
      name: "post", /*name: "product" — nazwa pola zapisywanego w Sanity. W kodzie odwołujesz się do niego jako document.product.*/
      type: "reference", /* type: "reference" — pole przechowuje odwołanie do innego dokumentu, a nie cały produkt.*/
      to: [{ type: "post" }], /*to: [{ type: "product" }] — pozwala wybrać dokument o typie product. W panelu Sanity będzie to wybór istniejącego produktu.*/
      validation: (Rule: any) => Rule.required(), /*validation: (Rule: any) => Rule.required() — pole jest wymagane. Nie powinno dać się opublikować dokumentu bez wybranego produktu.*/
    }, 
  ],
  preview: {
    select: {
      product: "product.name",
      image: "image",
    },
    prepare(selection: any) {
      const { product, image } = selection;
      return {
        title: product,
        media: image,
      };
    },
  },
};

export default heroBanner;
