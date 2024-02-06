import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const ImageHighlightType = defineType({
  name: "image-highlight",
  type: "object",
  title: "ImageHighlight",
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
        name: "image",
        type: "image",
        options: { hotspot: true },
      }),
    defineField({
      name: "ctabutton",
      type: "cta",
    }),
  ],
  icon: ImageIcon,
  preview: {
    select: {
      title: "headline",
      subtitle: "ImageHighlight"
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled",
        subtitle: "ImageHighlight",
      };
    },
  },
});
