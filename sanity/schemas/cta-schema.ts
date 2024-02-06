import { defineField, defineType } from "sanity";

export const ctaButtonType = defineType({
  name: "cta",
  type: "object",
  title: "CTA",
  fields: [
    defineField({
      name: "text",
      type: "string",
    }),
    defineField({
      name: "href",
      type: "string",
    }),
  ],
});
