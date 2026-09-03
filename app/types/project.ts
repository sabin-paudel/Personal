import { type Project } from "@/app/types";

const projects: Project[] = [
  {
    id: "1",
    title: "SlangHub",
    description:
      "A modern Gen Z slang dictionary built for discovering and understanding internet slang.",
    longDescription:
      "SlangHub is a community-driven slang dictionary where users can explore, search, and discover Gen Z slang, meanings, examples, and trending terms through a fast and interactive interface.",
    role: "Frontend design and development",
    image: "/projects/slang.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://slanghub.vercel.app/",
    githubUrl: null,
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
    featured: false,
  },
  {
    id: "3",
    title: "Secure Document Signing Platform",
    description:
      "A secure signature workflow with verification and audit trails.",
    longDescription:
      "A digital signature platform that enables secure document signing with verification steps, signing flows, and audit-friendly history.",
    role: "Frontend ",
    image: "/projects/projecttwo.png",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://sign.sabinpaudel.com.np",
    githubUrl: "https://github.com/sabin-paudel/digital-signature",
    featured: false,
  },
  {
    id: "4",
    title: "CivicEye",
    description:
      "A civic issue reporting platform designed to help citizens report, track, and engage with local community problems.",
    longDescription:
      "CivicEye is a location-aware civic platform that makes it easier for citizens to report local issues, track their progress, and stay informed about problems in their community through an interactive and user-friendly interface.",
    role: "Frontend design and development",
    image: "/projects/civiceye.png",
    tags: ["React", "TypeScript", "Maps", "Geolocation"],
    liveUrl: "https://civic-eye-frontend-liart.vercel.app",
    githubUrl: "https://github.com/sabin-paudel/CivicEye-frontend",
    featured: true,
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
