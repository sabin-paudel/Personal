import { type Project } from "@/app/types";

const projects: Project[] = [
  {
    id: "2",
    title: "Zone XVI Website",
    description:
      "A community website built to organize events, identity, and updates.",
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
      notes:
        "Good example of content-first design with a very small technical footprint.",
    },
  },
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack shopping system with clear product flows and admin control.",
    longDescription:
      "Built a complete e-commerce solution with React, featuring inventory sync, checkout flows, and an admin dashboard shaped for daily operations.",
    image: "/projects/ecommerce.png",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    liveUrl: null,
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
      notes:
        "Best example of product thinking, data flow, and front-end structure working together.",
    },
  },
  {
    id: "3",
    title: "Digital Signature Platform",
    description:
      "A secure signature workflow with verification and audit-friendly structure.",
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
    description:
      "A weather dashboard focused on quick scans and location-aware forecasts.",
    longDescription:
      "Designed an intuitive weather app with location-based forecasts, weather maps, and small data visualizations that make the forecast easy to read.",
    image: "/projects/weather.png",
    tags: ["React", "TypeScript", "Weather API", "Chart.js"],
    liveUrl: null,
    githubUrl: null,
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
];

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
