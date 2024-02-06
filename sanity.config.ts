import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { iconPicker } from 'sanity-plugin-icon-picker';
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  dataset: "production",
  title: "EIA Elementary",
  apiVersion: "2024-01-07",
  basePath: "/admin",
  plugins: [structureTool(), iconPicker()],
  schema: { types: schemas },
});

export default config;
