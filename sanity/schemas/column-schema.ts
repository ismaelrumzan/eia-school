import { defineField, defineType } from "sanity";

export const columnType = defineType({
  name: "column",
  type: "object",
  title: "Column Section",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctabutton",
      type: "cta",
    }),
  ],
});
