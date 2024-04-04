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
      className="drop-shadow bg-gradient-to-r from-[#C6BB79] to-orange-500 font-bebas text-[#094931] text-[20px] uppercase w-full sm:w-fit hover:to-[#C6BB79] hover:from-orange-500">
      <Link href={href} target={target}>
        {children}
      </Link>
    </Button>
  );
}
