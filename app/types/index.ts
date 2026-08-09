export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  image: string;
  tags: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  icon?: string;
  proficiency?: number;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  current?: boolean;
}
