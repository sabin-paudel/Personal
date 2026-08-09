import { type Project } from "@/app/types";

const projects: Project[] = [
  {
    id: "1",
    title: "Full-Stack E-Commerce Platform",
    description:
      "A full-stack shopping system with product flows and admin control.",
    longDescription:
      "A complete e-commerce solution with inventory sync, a checkout flow powered by Stripe, and an admin dashboard built for daily operations.",
    role: "Full-stack development",
    image: "/projects/ecommerce.png",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    liveUrl: null,
    githubUrl: "https://github.com/sabin-paudel/SaShop",
    featured: true,
  },
  {
    id: "2",
    title: "Zone XVI Community Website",
    description:
      "A community website built to organize events, identity, and updates.",
    longDescription:
      "Designed and developed a website for the Zone XVI community with event discovery, club profiles, and reusable content sections for future growth.",
    role: "Design and frontend development",
    image: "/projects/projectone.png",
    tags: ["React"],
    liveUrl: "https://zonexvi.vercel.app",
    githubUrl: "https://github.com/sabin-paudel/zonexvi",
    featured: true,
  },
  {
    id: "3",
    title: "Secure Document Signing Platform",
    description:
      "A secure signature workflow with verification and audit trails.",
    longDescription:
      "A digital signature platform that enables secure document signing with verification steps, signing flows, and audit-friendly history.",
    role: "Frontend and backend development",
    image: "/projects/projecttwo.png",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://digital-signature.vercel.app",
    githubUrl: "https://github.com/sabin-paudel/digital-signature",
    featured: false,
  },
  {
    id: "4",
    title: "Location-Aware Weather Dashboard",
    description:
      "A weather dashboard focused on quick scans and location-aware forecasts.",
    longDescription:
      "A weather app with location-based forecasts, weather maps, and small data visualizations that make the forecast easy to read at a glance.",
    role: "Frontend design and development",
    image: "/projects/weather.png",
    tags: ["React", "TypeScript", "Weather API", "Chart.js"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
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
