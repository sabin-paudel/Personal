"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

import OptimizedImage from "../ui/OptimizedImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pt-10 lg:pb-20 lg:pt-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, rgba(91, 124, 255, 0.1), transparent 24%), radial-gradient(circle at 82% 16%, rgba(255, 107, 44, 0.08), transparent 22%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-center lg:gap-14">
        <div className="order-2 space-y-8 sm:order-none lg:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-kicker w-fit"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-signal hidden lg:block" />
            <span className="whitespace-nowrap">
              Sabin Paudel · Frontend Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden max-w-3xl text-[clamp(2rem,5.25vw,5.25rem)] font-semibold leading-[1.03] tracking-tight text-white sm:block"
          >
            <span className="block ">Building fast,</span>
            <span className="block ">
              <span className="text-blue-900 ">thoughtful</span> digital
            </span>
            <span className="block text-gradient ">experiences.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <div>
              <p className="text-2xl font-semibold tracking-tight text-white">
                4
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
                Projects in portfolio
              </p>
            </div>

            <div className="hidden h-9 w-px bg-white/10 sm:block" />

            <div>
              <p className="text-lg font-semibold tracking-tight text-white">
                React · Next.js
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
                Core stack
              </p>
            </div>

            <div className="hidden h-9 w-px bg-white/10 sm:block" />

            <div>
              <p className="text-lg font-semibold tracking-tight text-white">
                Pokhara, Nepal
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
                Based in
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-(--brand-primary) px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-white/88 transition-colors duration-300 hover:border-white/20 hover:bg-white/6"
            >
              About Sabin
              <ChevronRight className="h-4 w-4 text-brand-primary" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="order-1 overflow-hidden rounded-4xl border border-white/10 bg-black/20 sm:order-none"
        >
          <div className="relative min-h-112 sm:min-h-128">
            <OptimizedImage
              src="/heroimage.png"
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
                <div className="rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-white/70 sm:bg-black/35 sm:backdrop-blur-md">
                  Product-minded frontend craft
                </div>
              </div>
            </div>
          </div>

          <div className="surface m-4 rounded-2xl p-2 sm:m-3 sm:p-3">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              Availability
            </p>
            <p className="mt-3 text-base font-semibold text-white">
              Open for frontend and product work
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
