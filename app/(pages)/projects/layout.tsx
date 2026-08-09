import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Sabin Paudel's selected projects built with React, Next.js, and TypeScript — e-commerce platforms, community websites, and more from Pokhara, Nepal.",
  keywords: [
    "Sabin Paudel projects",
    "Next.js projects",
    "React portfolio projects",
    "frontend developer portfolio",
    "web developer Nepal projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Projects by Sabin Paudel | Frontend Developer in Pokhara, Nepal",
    description:
      "A curated collection of React and Next.js projects built by Sabin Paudel, a frontend developer in Pokhara, Nepal.",
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
    title: "Projects by Sabin Paudel | Frontend Developer in Pokhara, Nepal",
    description:
      "A curated collection of React and Next.js projects built by Sabin Paudel, a frontend developer in Pokhara, Nepal.",
    images: ["/projects/opengraph-image"],
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.sabinpaudel.com.np/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: "https://www.sabinpaudel.com.np/projects",
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      {children}
    </>
  );
}
