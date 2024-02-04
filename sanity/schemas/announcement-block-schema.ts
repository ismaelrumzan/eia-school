import { defineField, defineType, defineArrayMember } from "sanity";

export const announcementBlockType = defineType({
    name: "announcement",
    type: "object",
    title: "Announcement",
    fields: [
        defineField({
            name: "message",
            type: "string",
        }),]
})