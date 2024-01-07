import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
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
      <main className="border-t-[6px] border-[#855247] w-full bg-[#f5f5f5]">
        <div className="container mx-auto max-w-[768px] bg-white">
          <div
            id="header"
            className="flex items-center pt-[6px] pb-[11px] px-4">
            <div className="flex-grow">
              <Link href="/">
                <Image
                  src={logo}
                  alt="EIA"
                  className="max-w-[66px] sm:max-w-[100px]"
                />
              </Link>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-bebas text-[18px]">
                JOIN THE JOURNEY THROUGH OUR{" "}
                <span className="text-[#855247]">NEXT FIRST</span>
              </div>
              <Link href="mailto:nsp@islamicacademy.ca" target="blank">
                <Mail className="h-6 w-6 text-black-500" />
              </Link>
            </div>
          </div>
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
