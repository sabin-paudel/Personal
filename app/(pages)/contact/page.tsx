"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Coffee,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import Tooltip from "@/app/components/ui/Tooltip";
import OptimizedImage from "@/app/components/ui/OptimizedImage";
import { SOCIAL_LINKS } from "@/app/lib/constants/social";
import { LOCATION } from "@/app/lib/constants/location";
import { tooltips, type TooltipKey } from "@/app/lib/data/tooltips";

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
              <Sparkles className="h-3.5 w-3.5 text-brand-signal" />
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
              src="/contact.png"
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
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-[0.24em]">
                      React + Next.js
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/76">
                    Modern web applications with a calm, product-minded feel.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-[0.24em]">
                      Pokhara, Nepal
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/76">
                    Available for freelance work and thoughtful collaborations.
                  </p>
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
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/55">
                    <Mail className="h-3.5 w-3.5 text-brand-primary" />
                    Drop me a line
                  </div>
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    Drop me a line
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                    The fastest way to reach me. I check email throughout the
                    day and usually reply within a few hours.
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
                  Response time: usually within 24 hours
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:paudelsabin0@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
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
              <h2 className="text-2xl font-semibold text-white">
                Other ways to connect
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
                Because email is not always the most convenient option.
              </p>

              <div className="mt-6 space-y-3">
                <ActionRow
                  icon={<Coffee className="h-5 w-5 text-brand-primary" />}
                  title="Virtual Coffee"
                  body="Casual chat about tech, life, or anything interesting."
                  cta="Grab a cup"
                />
                <ActionRow
                  icon={
                    <MessageCircle className="h-5 w-5 text-brand-primary" />
                  }
                  title="Quick DM"
                  body="Reach out on social if that’s easier."
                  cta="Super fast"
                />
                <ActionRow
                  icon={<Phone className="h-5 w-5 text-brand-signal" />}
                  title="Quick Call"
                  body="Schedule a 15-minute video chat to discuss your project."
                  cta="Book a slot"
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

function ActionRow({
  icon,
  title,
  body,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex min-w-0 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-white/68">{body}</p>
        </div>
      </div>

      <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55">
        {cta}
      </span>
    </div>
  );
}
