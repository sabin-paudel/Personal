import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sabin Paudel, a frontend developer in Pokhara, Nepal, for React and Next.js projects, freelance work, or collaboration opportunities.",
  keywords: [
    "contact Sabin Paudel",
    "hire frontend developer",
    "freelance React developer",
    "Next.js developer Nepal",
    "frontend developer Pokhara",
    "Sabin Paudel contact",
  ],
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Sabin Paudel | Frontend Developer in Pokhara, Nepal",
    description:
      "Get in touch with Sabin Paudel, a frontend developer in Pokhara, Nepal, for web development and collaboration opportunities.",
    url: "/contact",
    type: "website",
    siteName: "Sabin Paudel Portfolio",
    images: [
      {
        url: "/contact/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Sabin Paudel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sabin Paudel | Frontend Developer in Pokhara, Nepal",
    description:
      "Get in touch with Sabin Paudel, a frontend developer in Pokhara, Nepal, for web development and collaboration opportunities.",
    images: ["/contact/opengraph-image"],
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
      item: "https://sabinpaudel.com.np/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://sabinpaudel.com.np/contact",
    },
  ],
};

export default function ContactLayout({
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
