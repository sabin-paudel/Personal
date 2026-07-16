"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Code2,
  LayoutPanelTop,
  Sparkles,
} from "lucide-react";

import OptimizedImage from "../ui/OptimizedImage";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

const heroCards = [
  {
    label: "Focus",
    value: "Frontend systems",
    detail: "Design systems, app architecture, and performance-minded UI",
  },
  {
    label: "Base",
    value: "Pokhara, Nepal",
    detail: "Working across products, tooling, and polished user journeys",
  },
  {
    label: "Stack",
    value: "React + Next.js",
    detail: "TypeScript, Tailwind, motion, and practical backend glue",
  },
] as const;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, rgba(91, 124, 255, 0.1), transparent 24%), radial-gradient(circle at 82% 16%, rgba(255, 107, 44, 0.08), transparent 22%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.25fr_0.95fr] lg:gap-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-kicker w-fit"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-signal" />
            <span>{t.home.badge}</span>
          </motion.div>

          <div className="max-w-3xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(2.8rem,8vw,5.8rem)] font-semibold leading-[0.95] tracking-tight text-white"
            >
              <span className="block">{t.hero.headingLine1}</span>
              <span className="block text-gradient">
                {t.hero.headingHighlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl text-pretty text-base leading-7 text-white/78 sm:text-lg"
            >
              {t.hero.intro}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-(--brand-primary) px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.home.viewAllProjects}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-white/88 transition-colors duration-300 hover:border-white/20 hover:bg-white/6"
            >
              {t.hero.aboutButton}
              <ChevronRight className="h-4 w-4 text-brand-primary" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {heroCards.map((card) => (
              <div key={card.label} className="surface rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                  {card.label}
                </p>
                <p className="mt-3 text-base font-semibold text-white">
                  {card.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  {card.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative min-h-112 overflow-hidden rounded-4xl border border-white/10 bg-black/20 sm:min-h-136"
        >
          <OptimizedImage
            src="/image.png"
            alt="Sabin Paudel portrait"
            fill
            priority
            className="absolute inset-0 z-0 object-cover object-[50%_18%]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(5,5,5,0.12)_0%,rgba(5,5,5,0.24)_34%,rgba(5,5,5,0.72)_100%)]"
          />

          <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
                Product-minded frontend craft
              </div>
              <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-md">
                Human pulse
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-brand-signal">
                  <LayoutPanelTop className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-[0.24em]">
                    Product lens
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/76">
                  Building interfaces that read clearly, feel calm under
                  pressure, and still carry enough personality to be remembered.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-brand-primary">
                  <Code2 className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-[0.24em]">
                    Core stack
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/76">
                  React, Next.js, TypeScript, Tailwind, motion systems, and
                  practical product thinking.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="surface rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Availability
              </p>
              <p className="mt-3 text-base font-semibold text-white">
                Open for serious frontend and product work
              </p>
              <p className="mt-2 text-sm leading-6 text-white/68">
                Freelance, collaborations, and production-minded builds.
              </p>
            </div>
            {/* <div className="surface rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Signature feature
              </p>
              <p className="mt-3 text-base font-semibold text-white">
                STORY / X-RAY project views
              </p>
              <p className="mt-2 text-sm leading-6 text-white/68">
                A deliberate way to show design decisions, technical detail, and
                the reasoning behind each build.
              </p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
