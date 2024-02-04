import { HeroType } from "@/types/LandingPage";
import { CTAButton } from "../buttons/cta-button";
import config from "@/sanity/config/client-config";
import imageUrlBuilder from "@sanity/image-url";
import { H1 } from "../typography/h1";
import { Carousel } from "flowbite-react";
import { CarouselItem } from "../carousel-item";

const builder = imageUrlBuilder(config);

export function Hero({ block }: { block: HeroType }): JSX.Element {
  return (
    <>
      <div className="h-[235px] sm:h-[350px] px-2">
        {block.carousel && block.carousel.length > 0 && (
          <Carousel slideInterval={3000} pauseOnHover>
            {block.carousel.map((item) => (
              <CarouselItem
                key={item.caption}
                src={builder.image(item.image).url()}
                text={item.caption}
              />
            ))}
          </Carousel>
        )}
      </div>
      <div className="flex flex-col px-3 py-2">
        <div className="text-[13px] sm:text-[15px]">{block.prefix}</div>
        <H1>{block.heading}</H1>
        <div className="text-[14px] sm:text-[16px] mb-1">{block.tagline}</div>
      </div>
      <div className="flex justify-center px-3 sm:px-0 pb-3">
        <CTAButton href={block.ctabutton.href}>
          {block.ctabutton.text}
        </CTAButton>
      </div>
    </>
  );
}
