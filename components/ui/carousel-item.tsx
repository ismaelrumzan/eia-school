import Image from "next/image";
export function CarouselItem({
  src,
  text,
}: {
  src: string;
  text: string;
}): JSX.Element {
  return (
    <div className="relative h-[200px] sm:h-[250px] lg:h-[350px]">
      <Image src={src} alt={text} fill={true} className="object-cover" />
    </div>
  );
}
