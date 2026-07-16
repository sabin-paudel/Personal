"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Coffee, Code2 } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

import MagneticWrapper from "@/app/components/animations/MagneticWrapper";
import { SOCIAL_LINKS } from "@/app/lib/constants/social";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

export default function Footer() {
  const [clicks, setClicks] = useState(0);
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const handleLogoClick = () => {
    setClicks((prev) => prev + 1);

    if (clicks + 1 === 5) {
      confetti({
        particleCount: 96,
        spread: 66,
        origin: { y: 0.8 },
      });
      setClicks(0);
    }
  };

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="section-shell grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="space-y-4">
            <motion.button
              onClick={handleLogoClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="text-left text-2xl font-semibold tracking-tight text-white"
            >
              Aatreya Sabin
            </motion.button>
            <p className="max-w-md text-sm leading-7 text-white/68">
              A personal portfolio focused on frontend systems, interaction design,
              and practical product engineering.
            </p>
            <p className="text-xs uppercase tracking-[0.26em] text-white/45">
              {clicks}/5 clicks for a tiny celebration
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.24em] text-white/45">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/78">
              {[
                { label: t.navigation.home, href: "/" },
                { label: t.navigation.about, href: "/about" },
                { label: t.navigation.work, href: "/projects" },
                { label: t.navigation.contact, href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 text-brand-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.24em] text-white/45">
              Connect
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <MagneticWrapper key={social.name} strength={0.35}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm text-white/82 transition-colors hover:bg-white/[0.06]"
                      aria-label={social.name}
                      title={social.tooltip}
                    >
                      <Icon className="h-4 w-4 text-brand-primary" />
                      {social.name}
                    </a>
                  </MagneticWrapper>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Aatreya Sabin. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Coffee className="h-4 w-4 text-brand-signal" />
            <span>and</span>
            <Code2 className="h-4 w-4 text-brand-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
}
