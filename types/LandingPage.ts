export type HeroType = {
  _type: string;
  heading: string;
  prefix: string;
  tagline: string;
  carousel: { image: {}; caption: string }[];
  ctabutton: { text: string; href: string };
};

export type HeroType2 = {
  _type: string;
  heading: string;
  prefix: string;
  tagline: string;
  image: { src: string };
};

export type LandingPage = {
  pageBuilder: (HeroType | HeroType2)[];
};
