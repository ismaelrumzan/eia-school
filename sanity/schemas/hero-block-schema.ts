import { defineField, defineType, defineArrayMember } from "sanity";

export const heroBlockType = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "prefix",
      type: "string",
    }),
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "carousel",
      type: "array",
      title: "Hero Carousel",
      of: [
        defineArrayMember({
          name: "carousel",
          type: "carousel",
        }),
      ],
    }),
    defineField({
      name: "ctabutton",
      type: "cta",
    }),
  ],
});
