import Hero from "@/app/components/sections/Hero";
import HomeSections from "@/app/components/sections/HomeSections";
import { SOCIAL_LINKS } from "@/app/lib/constants/social";

const siteUrl = "https://sabinpaudel.com.np";
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const profilePageId = `${siteUrl}/#profile-page`;

const personSameAs = SOCIAL_LINKS.filter(
  (link) => link.href.startsWith("https://"),
).map((link) => link.href);

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Sabin Paudel",
      jobTitle: "Frontend Developer",
      description:
        "Frontend Developer from Pokhara, Nepal building modern web applications with React, Next.js, and TypeScript.",
      url: siteUrl,
      image: `${siteUrl}/picofme.png`,
      sameAs: personSameAs,
    },
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      name: "Sabin Paudel | Frontend Developer",
      url: siteUrl,
      description:
        "Portfolio profile for Sabin Paudel, a frontend developer from Pokhara, Nepal.",
      mainEntity: { "@id": personId },
      about: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "Sabin Paudel Portfolio",
      url: siteUrl,
      description:
        "Sabin Paudel's portfolio of frontend work, projects, and contact details.",
      publisher: { "@id": personId },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
      <Hero />
      <HomeSections />
    </>
  );
}
