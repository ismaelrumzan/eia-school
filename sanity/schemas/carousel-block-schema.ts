import { defineField, defineType } from "sanity";

export const carouselBlockType = defineType({
  name: "carousel",
  type: "object",
  title: "Carousel",
  fields: [
    defineField({
      name: "caption",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
});
