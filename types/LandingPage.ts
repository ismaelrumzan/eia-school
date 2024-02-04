export type HeroType = {
  _type: string;
  heading: string;
  prefix: string;
  tagline: string;
  carousel: { image: {}; caption: string }[];
  ctabutton: { text: string; href: string };
};

export type AnnouncementType = {
  _type: string;
  message: string;
};

export type IconsType = {
  _type: string;
  headline: string;
  subtitle: string;
  icons: { image: {}; text: string }[];
  ctabutton: { text: string; href: string };
};

export type LandingPage = {
  pageBuilder: (HeroType | AnnouncementType | IconsType)[];
};