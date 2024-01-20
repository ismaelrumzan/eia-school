import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Flowbite } from "flowbite-react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { eiaTheme } from "@/components/ui/flowbite/theme";
import { NavButton } from "@/components/ui/buttons/nav-button";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import logo from "@/media/eia-logo.png";

export const metadata: Metadata = {
  title: "Edmonton Islamic Academy - Elementary Campus",
  description: "Join the journey through our next first.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="border-t-[6px] border-[#094931] w-full bg-[#f5f5f5]">
        <div className="container mx-auto max-w-[768px] bg-white">
          <Flowbite theme={{ theme: eiaTheme }}>
            <Navbar fluid rounded>
              <NavbarBrand as={Link} href="/">
                <Image
                  src={logo}
                  alt="EIA"
                  className="max-w-[66px] sm:max-w-[100px]"
                />
              </NavbarBrand>
              <div className="flex md:order-2 gap-2">
                <NavButton href="/donate">Donate</NavButton>
                <NavbarToggle />
              </div>
              <NavbarCollapse>
                <NavbarLink href="/vision">Vision</NavbarLink>
                <NavbarLink href="/donations">Donations</NavbarLink>
                <NavbarLink href="/phases">Phases & Timeline</NavbarLink>
              </NavbarCollapse>
            </Navbar>
          </Flowbite>
          {children}
          <div
            id="footer-contact"
            className="px-4 bg-black py-[20px] text-center">
            <div className="text-white text-[11px] sm:text-[13px]">
              For comments and questions, email{" "}
              <Link
                href="mailto:nsp@islamicacademy.ca"
                target="blank"
                className="underline">
                nsp@islamicacademy.ca
              </Link>
            </div>
            <div className="text-white text-[11px] sm:text-[13px]">
              Join us in building a legacy of Islamic education and tradition!
            </div>
          </div>
        </div>
      </main>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XQ0N2GP5QJ"
      />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
