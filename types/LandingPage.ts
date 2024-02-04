import { PortableTextBlock } from "sanity";

type HeroType = {
  _type: string;
  heading: string;
  prefix: string;
  tagline: string;
  image: { src: string };
};

type HeroType2 = {
  _type: string;
  heading: string;
  prefix: string;
  tagline: string;
  image: { src: string };
};

export type LandingPage = {
  pageBuilder: (HeroType | HeroType2)[];
};
