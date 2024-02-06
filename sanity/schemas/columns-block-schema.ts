import { defineField, defineType, defineArrayMember } from "sanity";
import { ThListIcon } from "@sanity/icons";

export const ColumnsBlockType = defineType({
  name: "columns",
  type: "object",
  title: "Columns",
  fields: [
    defineField({
      name: "headline",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "columns",
      type: "array",
      title: "Column Sections",
      of: [
        defineArrayMember({
          name: "column",
          type: "column",
        }),
      ],
    }),
  ],
  icon: ThListIcon,
  preview: {
    select: {
      title: "headline",
      subtitle: "Columns"
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled",
        subtitle: "Columns",
      };
    },
  },
});
