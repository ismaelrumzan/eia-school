import Image from "next/image";
import { CTAButton } from "@/components/ui/buttons/cta-button";
import { H2_light } from "@/components/ui/typography/h2";

export function DonationItem({
  src,
  title,
  description,
  button,
}: {
  src: string;
  title: string;
  description: string;
  button?: { text: string; href: string };
}): JSX.Element {
  return (
    <div>
      <div className="relative h-[150px]">
        <Image src={src} alt={title} fill={true} className="object-contain" />
      </div>
      <div className="flex flex-col gap-3">
        <H2_light className="text-center">{title}</H2_light>
        <p className="text-sm text-center">{description}</p>
        {button && <CTAButton href={button.href}>{button.text}</CTAButton>}
      </div>
    </div>
  );
}
