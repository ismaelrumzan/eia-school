import Image from "next/image";
import { H2_highlight } from "@/components/ui/typography/h2-highlight";

export function CarouselItem({
  src,
  text,
  showText = false,
}: {
  src: string;
  text: string;
  showText?: boolean;
}): JSX.Element {
  return (
    <div>
      <div className="relative h-[235px] sm:h-[350px]">
        <Image
          quality={75}
          priority
          src={src}
          alt={text}
          fill
          className="object-cover"
        />
      </div>
      {showText && (
        <H2_highlight className="pt-2 text-center">{text}</H2_highlight>
      )}
    </div>
  );
}
