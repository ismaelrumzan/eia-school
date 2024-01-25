import Image from "next/image";
export function CarouselItem({
  src,
  text,
}: {
  src: string;
  text: string;
}): JSX.Element {
  return (
    <div className="relative h-[235px] sm:h-[350px]">
      <Image
        quality={75}
        priority
        src={src}
        alt={text}
        fill={true}
        className="object-cover"
      />
    </div>
  );
}
