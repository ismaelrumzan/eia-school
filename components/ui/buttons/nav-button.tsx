import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <Link href={href}>
      <Button
        className="drop-shadow bg-[#C6BB79] font-bebas text-[#094931] text-[20px] uppercase hover:bg-[#DED6A5]">
        {children}
      </Button></Link>
  );
}
