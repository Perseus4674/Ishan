import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { SkipLink } from "@/components/layout/SkipLink";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ishan Jain — Systems that remember",
    template: "%s · Ishan Jain",
  },
  description:
    "Ishan Jain builds AI systems with real memory — Talos, a self-hosted AI operating system, plus ML, research, and full-stack freelance work. CS student at Manipal University Jaipur.",
  authors: [{ name: "Ishan Jain", url: "https://github.com/Perseus4674" }],
  openGraph: {
    title: "Ishan Jain — Systems that remember",
    description:
      "Talos, a self-hosted AI operating system, plus ML, research, and full-stack freelance work.",
    url: "/",
    siteName: "Ishan Jain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan Jain — Systems that remember",
    description:
      "Talos, a self-hosted AI operating system, plus ML, research, and full-stack freelance work.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0b10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-text antialiased">
        <div className="ambient-backdrop" aria-hidden="true" />
        <SkipLink />
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
