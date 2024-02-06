import { defineField, defineType } from "sanity";

export const iconItemType = defineType({
  name: "icon",
  type: "object",
  title: "Icon Item",
  fields: [
    defineField({
      name: "text",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
