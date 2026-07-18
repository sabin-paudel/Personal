import type { Metadata } from "next";
import { GeistMono, GeistSans } from "geist/font";
import { Azeret_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import SystemBar from "@/app/components/layout/SystemBar";
import Navigation from "@/app/components/layout/Navigation";
import Footer from "@/app/components/layout/Footer";
import MouseGlow from "@/app/components/layout/MouseGlow";
import ProgressBar from "@/app/components/ui/ProgressBar";
import BubbleLoader from "./loading";
import { cn } from "@/app/lib/utils/cn";

const timeFont = Azeret_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-time",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sabinpaudel.com.np"),

  title: {
    default: "Sabin Paudel | Frontend Developer",
    template: "%s | Sabin Paudel",
  },

  description:
    "Sabin Paudel is a Frontend Developer from Pokhara, Nepal, building modern web applications with React, Next.js, and TypeScript.",

  applicationName: "Sabin Paudel Portfolio",
  authors: [{ name: "Sabin Paudel", url: "https://sabinpaudel.com.np" }],
  creator: "Sabin Paudel",
  publisher: "Sabin Paudel",
  category: "technology",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Sabin Paudel",
    "Sabin Paudel portfolio",
    "Sabin Paudel frontend developer",
    "Frontend Developer Nepal",
    "Frontend Developer Pokhara",
    "React Developer Nepal",
    "Next.js Developer Nepal",
    "TypeScript Developer",
    "JavaScript Developer",
    "Tailwind CSS Developer",
    "Web Developer Nepal",
    "Portfolio Website",
    "Modern Web Applications",
    "SEO Friendly Web Development",
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
    url: "/",
    title: "Sabin Paudel | Frontend Developer",
    description:
      "Explore the portfolio, projects, and skills of Sabin Paudel, a Frontend Developer from Pokhara, Nepal building modern web applications with React, Next.js, and TypeScript.",
    siteName: "Sabin Paudel Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sabin Paudel - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sabin Paudel | Frontend Developer",
    description:
      "Frontend Developer from Pokhara, Nepal specializing in React, Next.js, TypeScript, and modern web application development.",
    images: ["/opengraph-image"],
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
        GeistSans.variable,
        GeistMono.variable,
        timeFont.variable,
        GeistSans.className,
      )}
    >
      <body className="antialiased app-bg text-foreground overflow-x-hidden transition-colors duration-300">
        <BubbleLoader />

        <div aria-hidden="true" className="lamp-shell" />
        <div aria-hidden="true" className="lamp-beam" />

        <MouseGlow />

        <div className="fixed inset-0 -z-30 hidden opacity-40 sm:block">
          <div
            className="absolute inset-0 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 18% 20%, rgba(91, 124, 255, 0.12), transparent 35%), radial-gradient(circle at 82% 18%, rgba(255, 107, 44, 0.08), transparent 28%)",
            }}
          />
        </div>

        <SystemBar />
        <ProgressBar />
        <Navigation />

        <main className="relative z-10 pb-24 pt-24 sm:pb-0">{children}</main>
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
