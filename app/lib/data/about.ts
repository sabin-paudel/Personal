const profile = {
  name: "Sabin Paudel",
  role: "Frontend Developer",
  location: "Pokhara, Nepal 🇳🇵",
  image: "/image.png",
} as const;

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/sabin-paudel", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/sabin-paudel-702580254", icon: "linkedin" },
  { name: "Facebook", url: "https://facebook.com/paudelsabin0", icon: "facebook" },
  { name: "Instagram", url: "https://instagram.com/sabinpaudel_", icon: "instagram" },
];

const introduction = `
I’m Sabin Paudel, a frontend developer from Pokhara, Nepal, focused on React,
Next.js, TypeScript, and modern web applications.

I like turning complex product ideas into clear, maintainable interfaces with
careful structure, strong performance, and enough motion to feel alive.

Right now I’m building practical frontend systems and refining the way I ship
work that is easy to use and easy to trust.
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
