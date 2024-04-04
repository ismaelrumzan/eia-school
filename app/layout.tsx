import { Bebas_Neue, Arvo } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

const arvo = Arvo({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-arvo",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${arvo.variable}`}>
      <body className="font-arvo" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
