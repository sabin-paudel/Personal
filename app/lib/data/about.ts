const profile = {
  name: "Sabin Paudel",
  role: "Frontend Developer",
  location: "Pokhara, Nepal ",
  image: "/about.png",
} as const;

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/sabin-paudel", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sabin-paudel10/",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/paudelsabin0",
    icon: "facebook",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/sabinpaudel_",
    icon: "instagram",
  },
];

const introduction = `
I’m Sabin Paudel, a frontend developer based in Pokhara, Nepal. I specialize in
building modern web applications with React, Next.js, and TypeScript — from
marketing sites and community platforms to full e-commerce systems.

My work focuses on interfaces that are fast, responsive, and accessible. I care
about clear information hierarchy, sensible performance budgets, and code that
stays easy to maintain as a product grows.

I’m currently working as a frontend developer in Pokhara, contributing to
production React and Next.js applications, and I enjoy turning complex product
ideas into interfaces that are simple to use and simple to extend.
`;

const workExperience = [
  {
    title: "Frontend Intern",
    company: "YHHITS",
    period: "2026 — May 24, 2026",
    description:
      "Contributed to real-world React applications while developing practical experience in reusable UI, responsive design, and team workflows.",
  },
  {
    title: "Frontend Developer",
    company: "YHHITS",
    period: "May 24, 2026 — Present",
    description:
      "Building and maintaining production-ready frontend experiences with React, reusable UI systems, and performance-focused improvements.",
  },
] as const;

const studies = [
  {
    title: "Bachelor in CSIT",
    school: "Prithivi Narayan Campus",
    info: "7th semester",
  },
  {
    title: "+2",
    school: "Amarsingh Higher Secondary School",
    info: "GPA: 3.26",
  },
  {
    title: "SLC",
    school: "Jana Adarsha Secondary School",
    info: "GPA: 3.90",
  },
] as const;

const technicalSkills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  backend: ["Node.js", "Express", "MongoDB"],
  tools: ["Git", "Figma", "Postman", "Linux"],
} as const;

export function getAboutData() {
  return {
    profile,
    socialLinks,
    introduction,
    workExperience,
    studies,
    technicalSkills,
  };
}
