import Image from "next/image";
export function AboutItem({
  src,
  text,
}: {
  src: string;
  text: string;
}): JSX.Element {
  return (
    <div>
      <div className="relative h-[65px]">
        <Image src={src} alt={text} fill={true} className="object-contain" />
      </div>
      <p className="text-center text-sm">{text}</p>
    </div>
  );
}
