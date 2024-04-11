import { ImageHightlightType } from "@/types/LandingPage";
import Image from "next/image";
import config from "@/sanity/config/client-config";
import imageUrlBuilder from "@sanity/image-url";
import { H1_light } from "../typography/h1";
import { H2_light } from "../typography/h2";
import { CTAButton } from "../buttons/cta-button";

const builder = imageUrlBuilder(config);

export function ImageHighlight({
  block,
}: {
  block: ImageHightlightType;
}): JSX.Element {
  return (
    <>
      <div id="vision" className="flex flex-col bg-[#094931]">
        <div className="relative h-[225px] sm:h-[400px]">
          <Image
            src={builder.image(block.image).url()}
            alt={block.headline}
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col px-3 gap-1">
          <H1_light className="text-center">{block.headline}</H1_light>
          <H2_light className="text-center">{block.subtitle}</H2_light>
        </div>
        <div className="flex justify-center px-3 sm:px-0 py-2 mb-3">
          <CTAButton
            gtmEvent={`${block.ctabutton.text}_vision`}
            href={block.ctabutton.href}>
            {block.ctabutton.text}
          </CTAButton>
        </div>
      </div>
    </>
  );
}
