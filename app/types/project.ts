import { type Project } from "@/app/types";
import { type Locale } from "@/app/lib/i18n/translations";

const projectsByLocale: Record<Locale, Project[]> = {
  en: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-stack shopping system with clear product flows and admin control.",
      longDescription:
        "Built a complete e-commerce solution with React, featuring inventory sync, checkout flows, and an admin dashboard shaped for daily operations.",
      image: "/projects/ecommerce.png",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/sabin-paudel/SaShop",
      featured: true,
      storyPoints: [
        "Designed around repeat purchases, not just a polished homepage.",
        "Kept admin workflows visible so business decisions stay fast.",
        "Balanced a lightweight frontend with transactional backend logic.",
      ],
      xray: {
        challenge:
          "Turn product browsing, cart changes, and checkout into one coherent flow without cluttering the interface.",
        approach:
          "Used a modular UI with focused states for catalog, cart, and dashboard actions so the app stays predictable under load.",
        impact:
          "The result is a system that feels simple for shoppers and practical for operators at the same time.",
        stackFocus: ["React", "Node.js", "Stripe", "MongoDB"],
        notes: "Best example of product thinking, data flow, and front-end structure working together.",
      },
    },
    {
      id: "2",
      title: "Zone XVI website",
      description: "A community website built to organize events, identity, and updates.",
      longDescription:
        "Designed and developed a community website for Zone XVI with event discovery, club profiles, and reusable content sections for future growth.",
      image: "/projects/projectone.png",
      tags: ["React"],
      liveUrl: "https://zonexvi.vercel.app",
      githubUrl: "https://github.com/sabin-paudel/zonexvi",
      featured: true,
      storyPoints: [
        "Shaped the site around a local community’s public identity.",
        "Focused on clear information hierarchy for events and members.",
        "Kept the interface lightweight so updates stay easy to publish.",
      ],
      xray: {
        challenge:
          "Give a community group a website that feels alive without becoming difficult to maintain.",
        approach:
          "Structured the content into simple reusable blocks so announcements, club details, and forums remain easy to evolve.",
        impact:
          "The site reads quickly, scales cleanly, and feels more like a living system than a brochure.",
        stackFocus: ["React", "Content structure", "Responsive UI"],
        notes: "Good example of content-first design with a very small technical footprint.",
      },
    },
    {
      id: "3",
      title: "Digital signature platform",
      description: "A secure signature workflow with verification and audit-friendly structure.",
      longDescription:
        "Created a digital signature platform using React, enabling secure document signing with verification steps and audit trails.",
      image: "/projects/projecttwo.png",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://digital-signature.vercel.app",
      githubUrl: "https://github.com/sabin-paudel/digital-signature",
      featured: false,
      storyPoints: [
        "Built to feel trustworthy before it feels flashy.",
        "Balanced document security with a straightforward sign flow.",
        "Emphasized auditability and confidence for the user.",
      ],
      xray: {
        challenge:
          "Make a compliance-sensitive interaction feel simple while still making trust signals visible.",
        approach:
          "Separated signing, verification, and audit views so each step stays legible and reduces decision friction.",
        impact:
          "The experience supports confidence without forcing users to think about the mechanics of trust.",
        stackFocus: ["React", "Node.js", "MongoDB"],
        notes: "This is the most trust-sensitive project in the set.",
      },
    },
    {
      id: "4",
      title: "Weather Dashboard",
      description: "A weather dashboard focused on quick scans and location-aware forecasts.",
      longDescription:
        "Designed an intuitive weather app with location-based forecasts, weather maps, and small data visualizations that make the forecast easy to read.",
      image: "/projects/weather.png",
      tags: ["React", "TypeScript", "Weather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/sabin-paudel",
      featured: false,
      storyPoints: [
        "Focused on immediate readability for daily check-ins.",
        "Made weather state easy to compare at a glance.",
        "Used visualization sparingly so the interface stays calm.",
      ],
      xray: {
        challenge:
          "Present weather data in a way that feels useful within seconds, not after a long scan.",
        approach:
          "Used a compact layout with forecast summaries, supporting data, and restrained charts to keep the screen calm.",
        impact:
          "The dashboard is quick to read, responsive, and practical for repeated use.",
        stackFocus: ["React", "TypeScript", "Weather API", "Chart.js"],
        notes: "A good exercise in information density and visual restraint.",
      },
    },
  ],
  np: [
    {
      id: "1",
      title: "ई-कमर्स प्लेटफर्म",
      description: "स्पष्ट उत्पाद प्रवाह र एडमिन नियन्त्रणसहितको फुल-स्ट्याक शपिङ सिस्टम।",
      longDescription:
        "React प्रयोग गरेर inventory sync, checkout flow र daily operations का लागि बनेको admin dashboard सहित पूर्ण ई-कमर्स समाधान बनाइयो।",
      image: "/projects/ecommerce.png",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/sabin-paudel/SaShop",
      featured: true,
      storyPoints: [
        "उत्पादन किनबेचको प्रवाहलाई केन्द्रमा राखेर डिजाइन गरियो।",
        "व्यवस्थापकका कामहरू छरितो बनाउन admin workflow स्पष्ट राखियो।",
        "हल्का frontend र transactional backend सन्तुलित राखियो।",
      ],
      xray: {
        challenge:
          "उत्पदन browse, cart परिवर्तन र checkout लाई एउटै प्रवाहमा बाँधेर interface जटिल नबनाउने।",
        approach:
          "Catalog, cart र dashboard actions का लागि छुट्टाछुट्टै state राखेर UI predictible बनाइयो।",
        impact:
          "यो system shoppers का लागि सरल र operators का लागि व्यावहारिक महसुस हुन्छ।",
        stackFocus: ["React", "Node.js", "Stripe", "MongoDB"],
        notes: "Product thinking, data flow, र front-end structure को राम्रो उदाहरण।",
      },
    },
    {
      id: "2",
      title: "Zone XVI वेबसाइट",
      description: "इभेन्ट, पहिचान र अपडेट व्यवस्थित गर्न बनाइएको community website।",
      longDescription:
        "Zone XVI समुदायका लागि event discovery, club profiles र future growth का लागि reusable content sections सहितको वेबसाइट डिजाइन र विकास गरियो।",
      image: "/projects/projectone.png",
      tags: ["React"],
      liveUrl: "https://zonexvi.vercel.app",
      githubUrl: "https://github.com/sabin-paudel/zonexvi",
      featured: true,
      storyPoints: [
        "स्थानीय समुदायको सार्वजनिक पहिचानलाई केन्द्रमा राखियो।",
        "इभेन्ट र सदस्य जानकारीका लागि स्पष्ट hierarchy बनाइयो।",
        "अपडेट गर्न सजिलो हुन interface हल्का राखियो।",
      ],
      xray: {
        challenge:
          "समुदाय समूहलाई चलायमान तर सजिलै maintain हुने website दिनु।",
        approach:
          "Announcements, club details र forums का लागि reusable content blocks प्रयोग गरियो।",
        impact:
          "साइट छिट्टै पढिन्छ, सजिलै विस्तार हुन्छ, र brochure भन्दा living system जस्तो महसुस हुन्छ।",
        stackFocus: ["React", "Content structure", "Responsive UI"],
        notes: "Content-first design को सरल तर प्रभावकारी उदाहरण।",
      },
    },
    {
      id: "3",
      title: "डिजिटल हस्ताक्षर प्लेटफर्म",
      description: "verification र audit-friendly संरचनासहितको सुरक्षित signature workflow।",
      longDescription:
        "React मा आधारित यो प्लेटफर्मले सुरक्षित दस्तावेज हस्ताक्षर, verification steps र audit trails सहितको अनुभव दिन्छ।",
      image: "/projects/projecttwo.png",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://digital-signature.vercel.app",
      githubUrl: "https://github.com/sabin-paudel/digital-signature",
      featured: false,
      storyPoints: [
        "विश्वासिलो महसुस गराउने तर flashiness कम राखियो।",
        "Signing flow लाई सरल र predictable बनाइयो।",
        "Trust signal हरूलाई स्पष्ट रूपमा देखाइयो।",
      ],
      xray: {
        challenge:
          "compliance-sensitive interaction लाई सरल देखिने तर trust signal स्पष्ट हुने बनाउनु।",
        approach:
          "Signing, verification र audit views अलग राखेर प्रत्येक चरणलाई readable बनाइयो।",
        impact:
          "कामको mechanics भन्दा user confidence नै पहिलो महसुस हुन्छ।",
        stackFocus: ["React", "Node.js", "MongoDB"],
        notes: "यो set मा trust-sensitive project को राम्रो नमूना।",
      },
    },
    {
      id: "4",
      title: "मौसम ड्यासबोर्ड",
      description: "छिटो स्क्यान गर्न मिल्ने location-aware weather dashboard।",
      longDescription:
        "स्थान-आधारित पूर्वानुमान, weather maps र सानो data visualisation हरू प्रयोग गरेर forecast सजिलै पढिने बनाउन डिजाइन गरियो।",
      image: "/projects/weather.png",
      tags: ["React", "TypeScript", "Weather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/sabin-paudel",
      featured: false,
      storyPoints: [
        "दिनहुँको weather check को लागि तुरुन्त readable बनाइयो।",
        "Forecast तुलना गर्न मिल्ने गरी data structure राखियो।",
        "Visualization धेरै नबढाई interface calm राखियो।",
      ],
      xray: {
        challenge:
          "Weather data लाई छिटो उपयोगी हुने तर लामो scan माग नगर्ने तरिकाले देखाउनु।",
        approach:
          "Compact layout, summary cards र restrained charts प्रयोग गरियो।",
        impact:
          "Dashboard छिटो पढिन्छ, responsive छ, र repeated use का लागि practical छ।",
        stackFocus: ["React", "TypeScript", "Weather API", "Chart.js"],
        notes: "Information density र visual restraint को राम्रो अभ्यास।",
      },
    },
  ],
};

export function getProjects(locale: Locale = "en") {
  return projectsByLocale[locale];
}

export function getFeaturedProjects(locale: Locale = "en") {
  return projectsByLocale[locale].filter((p) => p.featured);
}

export function getProjectById(id: string, locale: Locale = "en") {
  return projectsByLocale[locale].find((p) => p.id === id);
}
