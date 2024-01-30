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
      className="font-bebas text-[#094931] text-[20px] uppercase bg-[#C6BB79] hover:bg-[#DED6A5] w-full sm:w-1/3">
      <Link href={href} target={target}>
        {children}
      </Link>
    </Button>
  );
}
