"use client";

import * as LucideIcons from "lucide-react";
import { motion, type Variants } from "framer-motion";
import {
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

import Tooltip from "@/app/components/ui/Tooltip";
import OptimizedImage from "@/app/components/ui/OptimizedImage";
import { getAboutData } from "@/app/lib/data/about";
import { tooltips } from "@/app/lib/data/tooltips";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

const skillIcons = {
  React: LucideIcons.Atom,
  "Next.js": LucideIcons.Triangle,
  TypeScript: LucideIcons.FileCode,
  Tailwind: LucideIcons.Palette,
  "Node.js": LucideIcons.Server,
  Express: LucideIcons.Rocket,
  MongoDB: LucideIcons.Database,
  Git: LucideIcons.GitBranch,
  Figma: LucideIcons.Frame,
  Postman: LucideIcons.Mail,
  Linux: LucideIcons.Terminal,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function About() {
  const { language, t } = useLanguage();
  const {
    profile,
    socialLinks,
    introduction,
    workExperience,
    studies,
    technicalSkills,
  } = getAboutData(language);

  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[340px_1fr] lg:gap-10">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:h-fit">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-shell p-5 sm:p-6"
          >
            <div className="mx-auto w-full max-w-60 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
              <OptimizedImage
                src={profile.image}
                alt={profile.name}
                width={640}
                height={640}
                priority
                className="w-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-3 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Profile
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                {profile.name}
              </h1>
              <p className="text-sm text-white/68">{profile.role}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-white/65">
                <MapPin className="h-4 w-4 text-brand-signal" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Current focus
              </p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                Shipping thoughtful React and Next.js experiences with a strong
                attention to architecture, speed, and detail.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.icon as keyof typeof socialIcons];

              return (
                <Tooltip
                  key={link.name}
                  content={tooltips[link.icon as keyof typeof tooltips]}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm text-white/84 transition-colors hover:border-white/18 hover:bg-white/6"
                  >
                    <span>{link.name}</span>
                    <Icon className="h-4 w-4 text-brand-primary" />
                  </a>
                </Tooltip>
              );
            })}
          </motion.div>
        </aside>

        <div className="space-y-12">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="section-shell p-6 sm:p-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="h-px w-10 bg-(--brand-primary)" />
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                {t.about.introduction}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 space-y-4 text-base leading-7 text-white/75 sm:text-lg"
            >
              {introduction
                .trim()
                .split("\n\n")
                .filter(Boolean)
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </motion.div>
          </motion.section>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="section-shell p-6 sm:p-8"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <Briefcase className="h-5 w-5 text-brand-primary" />
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {t.about.workExperience}
                </h2>
              </motion.div>

              <div className="mt-6 space-y-4">
                {workExperience.map((job) => (
                  <motion.article
                    key={job.title}
                    variants={itemVariants}
                    className="rounded-2xl border border-white/10 bg-white/3 p-5 transition-colors hover:border-white/16 hover:bg-white/5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {job.title}
                        </p>
                        <p className="mt-1 text-sm text-white/65">
                          {job.company}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
                      {job.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="section-shell p-6 sm:p-8"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <GraduationCap className="h-5 w-5 text-brand-signal" />
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {t.about.studies}
                </h2>
              </motion.div>

              <div className="mt-6 space-y-3">
                {studies.map((item) => (
                  <motion.article
                    key={item.title}
                    variants={itemVariants}
                    className="rounded-2xl border border-white/10 bg-white/3 p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-base font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-white/65">
                          {item.school}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs text-white/60">
                        {item.info}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="section-shell p-6 sm:p-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <Code2 className="h-5 w-5 text-brand-primary" />
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {t.about.technicalSkills}
              </h2>
            </motion.div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="space-y-4"
                >
                  <h3 className="text-sm uppercase tracking-[0.24em] text-white/45">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill) => {
                      const Icon =
                        skillIcons[skill as keyof typeof skillIcons] ||
                        LucideIcons.Code2;

                      return (
                        <div
                          key={skill}
                          className="rounded-2xl border border-white/10 bg-white/3 p-4"
                        >
                          <Icon className="h-5 w-5 text-brand-primary" />
                          <p className="mt-4 text-sm font-medium text-white">
                            {skill}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
