import page from "./page-schema";
import { landingPageType } from "./landing-page-schema";
import { heroBlockType } from "./hero-block-schema";
import { carouselBlockType } from "./carousel-block-schema";
import { ctaButtonType } from "./cta-schema";
import { announcementBlockType } from './announcement-block-schema';
import { IconsBlockType } from "./icons-block-schema";
import { iconItemType } from "./icon-schema";

const schemas = [
  page,
  landingPageType,
  heroBlockType,
  carouselBlockType,
  ctaButtonType, announcementBlockType, IconsBlockType, iconItemType,
];

export default schemas;
