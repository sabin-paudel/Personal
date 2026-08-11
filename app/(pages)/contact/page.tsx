"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import OptimizedImage from "@/app/components/ui/OptimizedImage";
import { LOCATION } from "@/app/lib/constants/location";

export default function Contact() {
  const city = LOCATION.city;
  const country = LOCATION.country;

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30 [mask-image:radial-gradient(ellipse_75%_45%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-7xl space-y-10">
        <header className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-kicker"
            >
              <span>Let’s connect</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.92] tracking-tight text-white"
            >
              <span className="block">Let’s build</span>
              <span className="block text-gradient">something useful</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl text-pretty text-base leading-7 text-white/72 sm:text-lg"
            >
              If you need a frontend developer for React, Next.js, or TypeScript
              work, send me a message.
              <br />
              I’m open to freelance work, collaborations, and thoughtful product
              builds.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative min-h-96 overflow-hidden rounded-4xl border border-white/10 bg-black/20 sm:min-h-[28rem] lg:min-h-[32rem]"
          >
            <OptimizedImage
              src="/imagecp.png"
              alt="Sabin Paudel portrait"
              fill
              priority
              className="absolute inset-0 z-0 object-cover object-[50%_18%]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(5,5,5,0.08)_0%,rgba(5,5,5,0.18)_36%,rgba(5,5,5,0.7)_100%)]"
            />

            <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-white/70 sm:bg-black/35 sm:backdrop-blur-md">
                  You’re Still Here?
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-shell p-6 sm:p-8"
            >
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                <div className="space-y-3">
                  <h2 className="inline-flex items-center gap-2.5 text-2xl font-semibold text-white sm:text-3xl">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    Drop me a line
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                    The fastest way to reach me. I check email throughout the
                    day and usually reply within a few hours.
                  </p>
                </div>

                <div className="group relative isolate flex max-w-full items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/90 sm:shrink-0">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 translate-x-[-110%] bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.14),transparent)] transition-transform duration-700 group-hover:translate-x-[110%]"
                  />
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-55" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                  <span className="leading-5">
                    Response time: faster than her replies
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:paudelsabin0@gmail.com"
                  className="inline-flex max-w-full items-center gap-2 break-all rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                >
                  paudelsabin0@gmail.com
                  <Mail className="h-4 w-4" />
                </a>

                <a
                  href="tel:+977-9804102241"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/84 transition-colors hover:bg-white/[0.06]"
                >
                  <Phone className="h-4 w-4 text-brand-signal" />
                  Quick call
                </a>
              </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard
                icon={<MapPin className="h-5 w-5 text-brand-primary" />}
                title="Based in"
                body="Working remotely from the beautiful city of lakes."
                footer={`${city}, ${country}`}
              />
              <InfoCard
                icon={<Calendar className="h-5 w-5 text-brand-signal" />}
                title="Timezone"
                body="UTC+5:45. Usually online from 9 AM to 6 PM."
                footer={LOCATION.timezone}
              />
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-shell p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-white">Take action</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
                Choose the next step that works best for you.
              </p>

              <div className="mt-6 space-y-3">
                <ActionLink
                  href="https://github.com/sabin-paudel"
                  icon={<Github className="h-5 w-5 text-brand-primary" />}
                  title="View GitHub"
                  body="Explore repositories and recent code."
                  external
                />
                <ActionLink
                  href="https://linkedin.com/in/sabin-paudel-702580254"
                  icon={<Linkedin className="h-5 w-5 text-brand-signal" />}
                  title="Connect on LinkedIn"
                  body="View my professional profile and experience."
                  external
                />
                <ActionLink
                  href="https://instagram.com/sabinpaudel_"
                  icon={<Instagram className="h-5 w-5 text-brand-primary" />}
                  title="Follow on Instagram"
                  body="See updates and moments beyond work."
                  external
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  body,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  footer: string;
}) {
  return (
    <div className="section-shell p-5">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-white/68">{body}</p>
        </div>
      </div>

      <p className="mt-5 text-sm uppercase tracking-[0.24em] text-white/45">
        {footer}
      </p>
    </div>
  );
}

function ActionLink({
  href,
  icon,
  title,
  body,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-2xl bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.075]"
    >
      <div className="flex min-w-0 gap-3">
        <div className="rounded-xl bg-white/[0.06] p-3">{icon}</div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-white/68">{body}</p>
        </div>
      </div>

      <ArrowUpRight className="h-5 w-5 shrink-0 text-white/45 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
    </a>
  );
}
