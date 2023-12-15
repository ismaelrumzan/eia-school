import Script from "next/script";
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Edmonton Islamic Academy - Elementary Campus",
  description: "Join the journey through our next first.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable}`}>
      <body className="font-caecilia">{children}</body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XQ0N2GP5QJ"
      />
    </html>
  );
}
