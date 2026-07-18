"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers3, Sparkles, Wand2 } from "lucide-react";

import { getFeaturedProjects } from "@/app/types/project";
import OptimizedImage from "@/app/components/ui/OptimizedImage";

const principleCards = [
  {
    icon: Layers3,
    title: "Systems over decoration",
    body: "Components, content, and hierarchy work together so the portfolio stays easy to scan and easy to extend.",
  },
  {
    icon: Code2,
    title: "Engineering detail",
    body: "Projects show the thinking behind them: stack choices, constraints, and the reasoning that shaped the UI.",
  },
  {
    icon: Wand2,
    title: "Motion with purpose",
    body: "Transitions and hover states should help the content breathe, not compete with it.",
  },
] as const;

export default function HomeSections() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-7xl space-y-24 px-4 pb-8 sm:px-6 lg:space-y-32">
      <section className="rounded-[2rem] bg-white/[0.025] p-6 sm:p-8 sm:shadow-[0_24px_80px_rgba(0,0,0,0.22)] lg:p-10">
        <div className="max-w-3xl space-y-4">
          <div className="section-kicker w-fit">
            <Sparkles className="h-3.5 w-3.5 text-brand-signal" />
            <span>Working principles</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            Working principles
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            A clear, practical approach to frontend work, product structure, and
            motion.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {principleCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl bg-white/[0.035] p-5 transition-colors hover:bg-white/[0.055]"
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

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-(--brand-primary) px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Learn more about Sabin
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/86 transition-colors hover:bg-white/[0.1]"
          >
            View all projects
            <ArrowRight className="h-4 w-4 text-brand-signal" />
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="section-kicker w-fit">
            <Sparkles className="h-3.5 w-3.5 text-brand-signal" />
            <span>Selected work</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Selected work
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/72">
            Projects with context, tradeoffs, and the decisions behind them.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-[2rem] bg-white/[0.03] transition-transform duration-300 sm:shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:hover:-translate-y-1"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-white/3">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="opacity-70"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                      Featured project
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/60">
                    X-Ray
                  </span>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-white/70">
                  {project.longDescription}
                </p>
                <dl className="grid gap-4 rounded-2xl bg-black/15 p-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-white/45">
                      My role
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-white/72">
                      {project.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-white/45">
                      Problem
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-white/72">
                      {project.xray.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-white/45">
                      Implementation
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-white/72">
                      {project.xray.approach}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-white/45">
                      Outcome
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-white/72">
                      {project.xray.impact}
                    </dd>
                  </div>
                </dl>
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
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
                >
                  Explore {project.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
