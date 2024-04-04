import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Flowbite } from "flowbite-react";
import { ArrowRight } from "lucide-react";
import { NavCTA } from "./nav-cta";
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
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Edmonton Islamic Academy - Elementary Campus",
  description: "Join the journey through our next first.",
};

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="w-full bg-white sm:bg-[#f5f5f5]">
        <div className="container mx-auto max-w-screen-xl bg-white min-h-screen pb-[59.5px] pt-[85px] sm:pt-[116px]">
          <Flowbite theme={{ theme: eiaTheme }}>
            <Navbar
              fluid
              className="fixed top-0 w-full max-w-screen-xl z-50 border-t-[6px] border-[#094931] drop-shadow">
              <NavbarBrand as={Link} href="/">
                <Image
                  src={logo}
                  alt="EIA"
                  className="max-w-[66px] sm:max-w-[100px]"
                />
              </NavbarBrand>
              <div className="flex md:order-2 gap-2">
                <NavCTA />
                <NavbarToggle className="text-[#094931]" />
              </div>
              <NavbarCollapse>
                <NavbarLink href="/gallery">Gallery</NavbarLink>
                <NavbarLink href="/contribute/donation-programs">
                  Donations
                </NavbarLink>
                <NavbarLink href="/contribute/qard-hasan">
                  Qard Hasan
                </NavbarLink>
                <NavbarLink href="/contact">
                  Contact Us
                </NavbarLink>
              </NavbarCollapse>
            </Navbar>
          </Flowbite>
          {children}
          <Footer />
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
