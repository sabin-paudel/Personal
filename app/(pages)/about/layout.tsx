import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sabin Paudel, a frontend developer from Pokhara, Nepal, with experience in React, Next.js, and TypeScript.",
  keywords: [
    "about Sabin Paudel",
    "frontend developer",
    "React developer Nepal",
    "Next.js developer Nepal",
    "Pokhara Nepal developer",
  ],
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About | Sabin Paudel",
    description:
      "Professional profile, technical stack, and career journey of Sabin Paudel.",
    url: "/about",
    type: "profile",
    siteName: "Sabin Paudel Portfolio",
    images: [
      {
        url: "/about/opengraph-image",
        width: 1200,
        height: 630,
        alt: "About Sabin Paudel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Sabin Paudel",
    description:
      "Professional profile, technical stack, and career journey of Sabin Paudel.",
    images: ["/about/opengraph-image"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
