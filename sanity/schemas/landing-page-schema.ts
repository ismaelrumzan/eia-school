import { defineArrayMember, defineField, defineType } from "sanity";

export const landingPageType = defineType({
  name: "landingpage",
  type: "document",
  title: "Landing Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "announcement",
          type: "announcement",
        }),
      ],
    }),
  ],
});
