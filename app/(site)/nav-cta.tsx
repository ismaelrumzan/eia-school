"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavButton } from "@/components/ui/buttons/nav-button";
import { ArrowRight, SendHorizonal, MailIcon } from "lucide-react";

export function NavCTA(): JSX.Element {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/donate" ? (
        <NavButton href="/contact">
          Contact
          <SendHorizonal className="ml-1 w-4 h-4" />
        </NavButton>
      ) : (
        <div>
          <NavButton href="/donate">
            Donate
            <ArrowRight className="ml-1 w-4 h-4" />
          </NavButton>
          {pathname !== "/contact" && (
            <Link href="/contact">
              <div className="flex justify-between text-[12px] text-slate-700 pt-1 underline tracking-wide hover:no-underline">
                <MailIcon className="w-4 h-4 text-[#C6BB79]" />
                Get in touch
              </div>
            </Link>
          )}
        </div>
      )}
    </>
  );
}
