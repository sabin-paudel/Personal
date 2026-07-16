import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Sabin Paudel's selected projects built with React, Next.js, TypeScript, and practical frontend systems thinking.",
  keywords: [
    "Sabin Paudel projects",
    "Next.js projects",
    "React portfolio projects",
    "full stack case studies",
    "frontend developer portfolio",
  ],
  alternates: {
    canonical: "/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Projects | Sabin Paudel",
    description:
      "A curated collection of production-ready projects by Sabin Paudel.",
    url: "/projects",
    type: "website",
    siteName: "Sabin Paudel Portfolio",
    images: [
      {
        url: "/projects/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Projects by Sabin Paudel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Sabin Paudel",
    description:
      "A curated collection of production-ready projects by Sabin Paudel.",
    images: ["/projects/opengraph-image"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
