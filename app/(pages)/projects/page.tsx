"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

import { getProjects } from "@/app/types/project";
import OptimizedImage from "@/app/components/ui/OptimizedImage";

export default function Projects() {
  const projects = getProjects();
  const siteUrl = "https://www.sabinpaudel.com.np";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sabin Paudel Projects",
    description:
      "Selected frontend projects by Sabin Paudel, built with React, Next.js, and TypeScript.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: `${siteUrl}${project.image}`,
        ...(project.liveUrl ? { url: project.liveUrl } : {}),
        ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
      },
    })),
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 [mask-image:radial-gradient(ellipse_75%_45%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
        <header className="grid items-end gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
          <div className="max-w-3xl space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-kicker w-fit"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-signal" />
              <span>Selected work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(1.9rem,5vw,4rem)] font-semibold leading-[1.04] tracking-tight text-white"
            >
              <span className="block">Selected projects,</span>
              <span className="block">built to solve</span>
              <span className="block text-gradient">real problems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl text-pretty text-base leading-7 text-white/72 sm:text-lg"
            >
              A selection of React and Next.js projects spanning e-commerce,
              community platforms, and modern web applications.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="text-xs uppercase tracking-[0.24em] text-white/45">
                  Work index
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                  {new Date().getFullYear()}
                </span>
              </div>

              <div className="divide-y divide-white/[0.07]">
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <p className="text-3xl font-semibold tracking-tight text-white tabular-nums">
                    {String(projects.length).padStart(2, "0")}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Selected projects
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <p className="text-base font-semibold text-white">
                    Frontend
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Primary focus
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <p className="text-base font-semibold text-white">
                    React · Next.js
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Main tools
                  </p>
                </div>
              </div>

              <p className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-white/68">
                From product interfaces to practical web applications.
              </p>
            </div>
          </motion.div>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              className="flex flex-col overflow-hidden rounded-[2rem] bg-white/[0.03] transition-transform duration-300 sm:shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:hover:-translate-y-1"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-white/3">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="opacity-70"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                    {project.role}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-white/70">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.055] px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-primary)] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      Live demo
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/82 transition-colors hover:bg-white/[0.06]"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              {projects.length} projects in the portfolio
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
              More experiments, prototypes, and older work live on GitHub.
            </p>
          </div>

          <Link
            href="https://github.com/sabin-paudel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/84 transition-colors hover:bg-white/[0.07]"
          >
            Explore more on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
