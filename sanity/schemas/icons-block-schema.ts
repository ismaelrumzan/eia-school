import { defineField, defineType, defineArrayMember } from "sanity";
import { ClipboardImageIcon } from "@sanity/icons";

export const IconsBlockType = defineType({
  name: "icons",
  type: "object",
  title: "Icons",
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
      name: "icons",
      type: "array",
      title: "Icons Gallery",
      of: [
        defineArrayMember({
          name: "iconElement",
          type: "icon",
        }),
      ],
    }),
    defineField({
      name: "ctabutton",
      type: "cta",
    }),
  ],
  icon: ClipboardImageIcon,
  preview: {
    select: {
      title: "headline",
      subtitle: "Icons"
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled",
        subtitle: "Icons",
      };
    },
  },
});
