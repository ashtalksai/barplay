import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Barplay — Turn Empty Tables Into Conversations",
  description:
    "Barplay puts a QR code on every table. Guests scan, play trivia, and connect with strangers two tables over. Bar owners get the dwell-time data to prove it works.",
  openGraph: {
    title: "Barplay — Turn Empty Tables Into Conversations",
    description:
      "The bar entertainment platform that connects strangers and proves it in data.",
    url: "https://barplay.ashketing.com",
    siteName: "Barplay",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
