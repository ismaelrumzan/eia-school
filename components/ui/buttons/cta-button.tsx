import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTAButton({
  children,
  href,
  disabled = false,
  target = "_self",
}: {
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
  target?: string;
}): JSX.Element {
  return (
    <Button
      disabled={disabled}
      asChild
      className="drop-shadow bg-[#C6BB79] font-bebas text-[#094931] text-[20px] uppercase w-full sm:w-fit hover:bg-[#DED6A5]">
      <Link href={href} target={target}>
        {children}
      </Link>
    </Button>
  );
}
