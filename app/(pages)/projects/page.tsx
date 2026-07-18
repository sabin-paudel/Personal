"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

import { getProjects } from "@/app/types/project";
import OptimizedImage from "@/app/components/ui/OptimizedImage";

type ProjectView = "story" | "xray";

export default function Projects() {
  const projects = getProjects();
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? "");
  const [view, setView] = useState<ProjectView>("story");
  const siteUrl = "https://sabinpaudel.com.np";

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? projects[0],
    [activeProjectId, projects],
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sabin Paudel Projects",
    description:
      "Selected frontend projects by Sabin Paudel, with React and Next.js implementation detail.",
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

  if (!activeProject) return null;

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 [mask-image:radial-gradient(ellipse_75%_45%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-14">
        <header className="max-w-3xl space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-kicker"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-signal" />
            <span>Selected work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.92] tracking-tight text-white"
          >
            Projects with <span className="text-gradient">X-Ray detail</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl text-pretty text-base leading-7 text-white/72 sm:text-lg"
          >
            Real products, clear tradeoffs, and a level of detail that shows how
            the work actually hangs together.
          </motion.p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <motion.article
            key={activeProject.id + view}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="section-shell overflow-hidden"
          >
            <div className="relative min-h-[300px] overflow-hidden border-b border-white/10 sm:min-h-[240px]">
              <OptimizedImage
                src={activeProject.image}
                alt={activeProject.title}
                width={1600}
                height={900}
                className="h-full min-h-[300px] w-full object-cover opacity-70 sm:min-h-[240px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.82))]" />

              <div className="absolute left-0 top-0 flex w-full flex-col items-start gap-4 p-5 sm:flex-row sm:justify-between sm:p-6">
                <div className="max-w-full sm:max-w-[70%]">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                    Sabin Paudel Project X-Ray
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">
                    {activeProject.title}
                  </h2>
                </div>

                <div className="flex rounded-full border border-white/10 bg-black/70 p-1 sm:bg-black/35 sm:backdrop-blur-md">
                  <TabButton
                    active={view === "story"}
                    label="Story"
                    onClick={() => setView("story")}
                  />
                  <TabButton
                    active={view === "xray"}
                    label="X-Ray"
                    onClick={() => setView("xray")}
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {(view === "story"
                    ? activeProject.tags
                    : activeProject.xray.stackFocus
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/78"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {view === "story" ? (
                  <>
                    <p className="max-w-2xl text-base leading-7 text-white/76">
                      {activeProject.longDescription}
                    </p>
                    <ul className="space-y-3">
                      {activeProject.storyPoints.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/72"
                        >
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                      Press into the architecture, not just the surface.
                    </p>
                    <div className="space-y-4">
                      <DetailBlock
                        label="Challenge"
                        value={activeProject.xray.challenge}
                      />
                      <DetailBlock
                        label="Approach"
                        value={activeProject.xray.approach}
                      />
                      <DetailBlock
                        label="Impact"
                        value={activeProject.xray.impact}
                      />
                    </div>
                  </>
                )}
              </div>

              <aside className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    What it shows
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/72">
                    {view === "story"
                      ? activeProject.description
                      : activeProject.xray.notes}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    Live detail
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/72">
                    <span className="h-2 w-2 rounded-full bg-brand-signal" />
                    <span>Live project</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    A deliberate surface for the project, with just enough motion
                    to support the hierarchy.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {activeProject.liveUrl && (
                    <Link
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-primary)] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      View project
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                  {activeProject.githubUrl && (
                    <Link
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/82 transition-colors hover:bg-white/[0.06]"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  )}
                </div>
              </aside>
            </div>
          </motion.article>

          <div className="space-y-3">
            {projects.map((project, index) => {
              const isActive = project.id === activeProject.id;

              return (
                <motion.button
                  key={project.id}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  onClick={() => {
                    setActiveProjectId(project.id);
                    setView("story");
                  }}
                  className={[
                    "group w-full rounded-[1.5rem] border p-3 text-left transition-all sm:p-4",
                    isActive
                      ? "border-white/20 bg-white/[0.06]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/16 hover:bg-white/[0.05]",
                  ].join(" ")}
                >
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20 sm:h-28 sm:w-32">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        width={320}
                        height={240}
                        className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                            {project.featured ? "Featured project" : "Case study"}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-white">
                            {project.title}
                          </h3>
                        </div>
                        <span className="rounded-full border border-white/10 bg-brand-signal/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-brand-signal">
                          {project.id}
                        </span>
                      </div>

                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/66">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
                          STORY
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
                          X-RAY
                        </span>
                        {isActive && (
                          <span className="rounded-full border border-brand-primary/30 bg-brand-primary/12 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-primary">
                            Active
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              {projects.length} projects in the portfolio
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
              The portfolio stays content-first, but the interaction layer gives each
              project enough structure to tell a more honest technical story.
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

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition-colors",
        active
          ? "bg-white text-black"
          : "text-white/60 hover:text-white",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function DetailBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-white/45">{label}</p>
      <p className="mt-3 text-sm leading-6 text-white/72">{value}</p>
    </div>
  );
}
