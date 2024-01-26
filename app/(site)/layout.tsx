import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Flowbite } from "flowbite-react";
import { ArrowRight } from "lucide-react";
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

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="w-full bg-[#f5f5f5] min-h-screen pb-[60px] pt-[85px] sm:pt-[116px]">
        <div className="container mx-auto max-w-[768px] bg-white">
          <Flowbite theme={{ theme: eiaTheme }}>
            <Navbar
              fluid
              className="fixed top-0 w-full max-w-[768px] z-50 border-t-[6px] border-[#094931] drop-shadow">
              <NavbarBrand as={Link} href="/">
                <Image
                  src={logo}
                  alt="EIA"
                  className="max-w-[66px] sm:max-w-[100px]"
                />
              </NavbarBrand>
              <div className="flex md:order-2 gap-2">
                <NavButton href="/donate">
                  Donate
                  <ArrowRight />
                </NavButton>
                <NavbarToggle className="text-[#094931]" />
              </div>
              <NavbarCollapse>
                <NavbarLink href="/vision">Vision</NavbarLink>
                <NavbarLink href="/donations">Donations</NavbarLink>
                <NavbarLink href="/phases">Phases & Timeline</NavbarLink>
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
