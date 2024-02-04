import { Page } from "@/types/Page";
import { LandingPage } from "@/types/LandingPage";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
        }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
    { slug }
  );
}

export async function getLandingPage(slug: string): Promise<LandingPage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "landingpage" && slug.current == $slug][0]{
          pageBuilder[]{
            _type == "announcement" => {
              _type,
              message,
            },
            _type == "icons" => {
              _type,
              headline,
              subtitle,
              icons,
              ctabutton
            },
            _type == "hero" => {
              _type,
              prefix,
              heading,
              tagline,
              carousel,
              ctabutton
            }
          },
        }`,
    { slug }
  );
}
