import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import SystemBar from "@/app/components/layout/SystemBar";
import Navigation from "@/app/components/layout/Navigation";
import Footer from "@/app/components/layout/Footer";
import MouseGlow from "@/app/components/layout/MouseGlow";
import ProgressBar from "@/app/components/ui/ProgressBar";
import { cn } from "@/app/lib/utils/cn";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sabinpaudel.com.np"),

  title: {
    default: "Sabin Paudel | Frontend Developer in Pokhara, Nepal",
    template: "%s | Sabin Paudel",
  },

  description:
    "Sabin Paudel is a frontend developer in Pokhara, Nepal, building fast, accessible web applications with React, Next.js, and TypeScript. Explore his portfolio of projects, skills, and experience.",

  applicationName: "Sabin Paudel Portfolio",
  authors: [{ name: "Sabin Paudel", url: "https://www.sabinpaudel.com.np" }],
  creator: "Sabin Paudel",
  publisher: "Sabin Paudel",
  category: "technology",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Sabin Paudel",
    "frontend developer",
    "frontend developer Pokhara",
    "frontend developer Nepal",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "frontend engineer",
    "web developer Nepal",
    "React.js developer Nepal",
    "Next.js developer Nepal",
  ],

  verification: {
    google: "E3nFzfLYn6siE0KzcOArfuiHbQsrY84dnWoNE7YmDMk",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sabinpaudel.com.np",
    title: "Sabin Paudel | Frontend Developer in Pokhara, Nepal",
    description:
      "Sabin Paudel is a frontend developer in Pokhara, Nepal, building fast, accessible web applications with React, Next.js, and TypeScript.",
    siteName: "Sabin Paudel Portfolio",
    images: [
      {
        url: "https://www.sabinpaudel.com.np/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sabin Paudel - Frontend Developer in Pokhara, Nepal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sabin Paudel | Frontend Developer in Pokhara, Nepal",
    description:
      "Sabin Paudel is a frontend developer in Pokhara, Nepal, building fast, accessible web applications with React, Next.js, and TypeScript.",
    images: ["https://www.sabinpaudel.com.np/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        geistSans.className,
      )}
    >
      <body className="antialiased app-bg text-foreground overflow-x-hidden transition-colors duration-300">
        <div aria-hidden="true" className="lamp-beam" />

        <MouseGlow />

        <SystemBar />
        <ProgressBar />
        <Navigation />

        <main className="relative z-10  pt-0 ">{children}</main>
        <Footer />

        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="58e33305-1dd3-49a3-81a4-bc7be9f7a634"
        />
      </body>
    </html>
  );
}
