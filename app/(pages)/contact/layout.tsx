import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sabin Paudel for frontend development, React and Next.js projects, freelance work, or collaboration opportunities.",
  keywords: [
    "contact Sabin Paudel",
    "hire frontend developer",
    "freelance React developer",
    "Next.js developer Nepal",
    "Sabin Paudel contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact | Sabin Paudel",
    description:
      "Get in touch with Sabin Paudel for web development and collaboration opportunities.",
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
    title: "Contact | Sabin Paudel",
    description:
      "Get in touch with Sabin Paudel for web development and collaboration opportunities.",
    images: ["/contact/opengraph-image"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
