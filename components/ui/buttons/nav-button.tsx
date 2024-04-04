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
        className="drop-shadow bg-gradient-to-r from-[#C6BB79] to-orange-500 font-bebas text-[#094931] text-[20px] uppercase hover:to-[#C6BB79] hover:from-orange-500">
        {children}
      </Button></Link>
  );
}
