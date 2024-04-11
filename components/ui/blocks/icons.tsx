import { IconsType } from "@/types/LandingPage";
import config from "@/sanity/config/client-config";
import imageUrlBuilder from "@sanity/image-url";
import { H1 } from "../typography/h1";
import { H2 } from "../typography/h2";
import { AboutItem } from "../about-item";
import { CTAButton } from "../buttons/cta-button";

const builder = imageUrlBuilder(config);

export function Icons({ block }: { block: IconsType }): JSX.Element {
  return (
    <>
      <div
        id="about"
        className="py-4 px-2 flex flex-col border-t border-[#094931]">
        <H1 className="text-center">{block.headline}</H1>
        <H2 className="text-center">{block.subtitle}</H2>
        {block.icons && block.icons.length > 0 && (
          <div className="grid grid-cols-4 gap-4 my-4">
            {block.icons.map((iconItem) => (
              <AboutItem
                src={builder.image(iconItem.image).url()}
                text={iconItem.text}
                key={iconItem.text}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center mb-3 px-3 sm:px-0">
        <CTAButton
          gtmEvent={`${block.ctabutton.text}_about`}
          href={block.ctabutton.href}>
          {block.ctabutton.text}
        </CTAButton>
      </div>
    </>
  );
}
