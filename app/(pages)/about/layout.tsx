import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sabin Paudel, a frontend developer in Pokhara, Nepal, specializing in React, Next.js, and TypeScript web applications.",
  keywords: [
    "about Sabin Paudel",
    "frontend developer Pokhara",
    "frontend developer Nepal",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
  ],
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Sabin Paudel | Frontend Developer in Pokhara, Nepal",
    description:
      "Professional profile, technical stack, and career journey of Sabin Paudel, a frontend developer in Pokhara, Nepal.",
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
    title: "About Sabin Paudel | Frontend Developer in Pokhara, Nepal",
    description:
      "Professional profile, technical stack, and career journey of Sabin Paudel, a frontend developer in Pokhara, Nepal.",
    images: ["/about/opengraph-image"],
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
      name: "About",
      item: "https://www.sabinpaudel.com.np/about",
    },
  ],
};

export default function AboutLayout({
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
