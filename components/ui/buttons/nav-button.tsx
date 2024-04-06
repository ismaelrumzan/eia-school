"use client";
import { sendGTMEvent } from "@next/third-parties/google";
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
    <Button
      asChild
      className="font-bebas text-[#094931] text-[20px] uppercase bg-[#C6BB79] hover:bg-[#DED6A5]">
      <Link
        href={href}
        onClick={() =>
          sendGTMEvent({ event: "buttonClicked", value: "topnav-donate" })
        }>
        {children}
      </Link>
    </Button>
  );
}
