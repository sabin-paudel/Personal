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
import { SOCIAL_LINKS } from "@/app/lib/constants/social";
import { LOCATION } from "@/app/lib/constants/location";
import { tooltips, type TooltipKey } from "@/app/lib/data/tooltips";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

export default function Contact() {
  const { language, t } = useLanguage();
  const city = language === "np" ? "पोखरा" : LOCATION.city;
  const country = language === "np" ? "नेपाल" : LOCATION.country;

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30 [mask-image:radial-gradient(ellipse_75%_45%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-7xl space-y-10">
        <header className="max-w-3xl space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-kicker"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-signal" />
            <span>{t.contact.connectBadge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.92] tracking-tight text-white"
          >
            <span className="block">{t.contact.headingLine1}</span>
            <span className="block text-gradient">{t.contact.headingLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl text-pretty text-base leading-7 text-white/72 sm:text-lg"
          >
            {t.contact.introLine1}
            <br />
            {t.contact.introLine2}
          </motion.p>
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
                    {t.contact.dropLineTitle}
                  </div>
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    {t.contact.dropLineTitle}
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                    {t.contact.dropLineDesc}
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
                  {t.contact.responseTime}
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
                  href="tel:+977-9800000000"
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
                title={t.contact.basedIn}
                body={t.contact.basedInDesc}
                footer={`${city}, ${country}`}
              />
              <InfoCard
                icon={<Calendar className="h-5 w-5 text-brand-signal" />}
                title="Timezone"
                body={t.contact.timezoneText}
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
                {t.contact.otherWaysTitle}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
                {t.contact.otherWaysDesc}
              </p>

              <div className="mt-6 space-y-3">
                <ActionRow
                  icon={<Coffee className="h-5 w-5 text-brand-primary" />}
                  title={t.contact.virtualCoffee}
                  body={t.contact.virtualCoffeeDesc}
                  cta={t.contact.grabCup}
                />
                <ActionRow
                  icon={<MessageCircle className="h-5 w-5 text-brand-primary" />}
                  title={t.contact.quickDm}
                  body={t.contact.quickDmDesc}
                  cta={t.contact.superFast}
                />
                <ActionRow
                  icon={<Phone className="h-5 w-5 text-brand-signal" />}
                  title={t.contact.quickCall}
                  body={t.contact.quickCallDesc}
                  cta={t.contact.bookSlot}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-shell p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-white">
                {t.contact.findMe}
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  const tooltipKey = social.name.toLowerCase() as TooltipKey;

                  return (
                    <Tooltip key={social.name} content={tooltips[tooltipKey]}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/82 transition-colors hover:bg-white/[0.06]"
                      >
                        <Icon className="h-4 w-4 text-brand-primary" />
                        {social.name}
                      </a>
                    </Tooltip>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                  {t.contact.poweredBy}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  Curiosity, clean execution, and a bias toward work that holds up in
                  production.
                </p>
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
