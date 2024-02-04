import page from "./page-schema";
import { landingPageType } from "./landing-page-schema";
import { heroBlockType } from "./hero-block-schema";
import { carouselBlockType } from "./carousel-block-schema";
import { ctaButtonType } from "./cta-schema";
import { announcementBlockType } from './announcement-block-schema';

const schemas = [
  page,
  landingPageType,
  heroBlockType,
  carouselBlockType,
  ctaButtonType, announcementBlockType
];

export default schemas;
