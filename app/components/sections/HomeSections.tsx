"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Layers3,
  Wand2,
} from "lucide-react";

import { getFeaturedProjects } from "@/app/types/project";
import OptimizedImage from "@/app/components/ui/OptimizedImage";

const principleCards = [
  {
    icon: Layers3,
    title: "Make it make sense",
    body: "Good interfaces shouldn’t need explaining. If it feels obvious, the job is probably done.",
  },
  {
    icon: Code2,
    title: "Pretty, but functional",
    body: "Because a beautiful interface that breaks the moment someone touches it is just expensive decoration.",
  },
  {
    icon: Wand2,
    title: "Just enough magic",
    body: "Thoughtful motion, tiny details, and interactions that make people think, “okay, that’s nice.”",
  },
] as const;

export default function HomeSections() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-7xl space-y-28 px-4 pb-8 sm:px-6 lg:space-y-36">
      <section className="rounded-[2rem] bg-white/[0.025] p-6 sm:p-8 sm:shadow-[0_24px_80px_rgba(0,0,0,0.22)] lg:p-10">
        <div className="max-w-3xl space-y-4">
          <div className="section-kicker w-fit">
            <span>Rules I Made Up</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            How I Do Things
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            A clear, practical approach to frontend work, product structure, and
            motion.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {principleCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl bg-white/[0.035] p-6 transition-colors hover:bg-white/[0.055]"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/[0.06] p-3">
                    <Icon className="h-4 w-4 text-brand-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            Learn more about Sabin
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"
          >
            View all projects
            <ArrowRight className="h-4 w-4 text-brand-signal" />
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl space-y-3">
            <div className="section-kicker w-fit">
              <span>Things I Made</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What I’ve Been Cooking
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/72">
              A selection of React and Next.js projects focused on thoughtful
              design and solid frontend experiences.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="shrink-0 lg:pb-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-55" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-xs uppercase tracking-[0.24em] text-white/55">
                Currently building
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-white/80">
              Probably overthinking a button
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
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
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-white/70">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
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
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-opacity hover:opacity-80"
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
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition-opacity hover:opacity-90"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </Link>
                  )}
                  <Link
                    href="/projects"
                    className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-opacity hover:opacity-90"
                  >
                    Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
