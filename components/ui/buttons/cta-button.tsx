"use client";
import { Button } from "@/components/ui/button";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

export function CTAButton({
  children,
  href,
  disabled = false,
  target = "_self",
  gtmEvent,
}: {
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
  target?: string;
  gtmEvent: string;
}): JSX.Element {
  return (
    <Button
      disabled={disabled}
      asChild
      className="drop-shadow bg-[#C6BB79] font-bebas text-[#094931] text-[20px] uppercase w-full sm:w-fit hover:bg-[#DED6A5]"
      onClick={() =>
        sendGTMEvent({ event: "buttonClicked", value: { gtmEvent } })
      }>
      <Link href={href} target={target}>
        {children}
      </Link>
    </Button>
  );
}
