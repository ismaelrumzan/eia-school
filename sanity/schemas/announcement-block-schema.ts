import { defineField, defineType } from "sanity";
import { AddCommentIcon} from "@sanity/icons";

export const announcementBlockType = defineType({
    name: "announcement",
    type: "object",
    title: "Announcement",
    fields: [
        defineField({
            name: "message",
            type: "string",
        }),],
    icon: AddCommentIcon,
    preview: {
        select: {
            title: "message",
            subtitle: "title",
        },
        prepare({ title }) {
            return {
              title: title || "Untitled",
              subtitle: "Announcement",
            };
          },
    },
})