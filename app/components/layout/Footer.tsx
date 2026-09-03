"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Code2,
  Facebook,
  Linkedin,
  Share2,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import confetti from "canvas-confetti";

import MagneticWrapper from "@/app/components/animations/MagneticWrapper";
import { SOCIAL_LINKS } from "@/app/lib/constants/social";

export default function Footer() {
  const pathname = usePathname();
  const [clicks, setClicks] = useState(0);
  const [shareStatus, setShareStatus] = useState("");
  const currentYear = new Date().getFullYear();
  const shareUrl = "https://sabinpaudel.com.np";
  const shareText = "Sabin Paudel | Frontend Developer";

  const shareLinks = [
    {
      name: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      icon: Linkedin,
    },
    {
      name: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: Facebook,
    },
    {
      name: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      icon: Twitter,
    },
  ] as const;

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

  const handleNativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: shareText, url: shareUrl });
        return;
      }

      await navigator.clipboard.writeText(shareUrl);
      setShareStatus("Portfolio link copied");
      window.setTimeout(() => setShareStatus(""), 2000);
    } catch {
      // Closing the native share sheet should not surface an application error.
    }
  };

  if (pathname !== "/") return null;

  return (
    <footer className="mt-6 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-10 py-6 sm:py-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="space-y-4">
            <motion.button
              onClick={handleLogoClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="text-left text-2xl font-semibold tracking-tight text-white"
            >
              Sabin Paudel
            </motion.button>
            <p className="max-w-md text-sm leading-7 text-white/68">
              A personal portfolio for Sabin Paudel, a frontend developer from
              Pokhara, Nepal, focused on React, Next.js, TypeScript, and modern
              web applications.
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
                { label: "Sabin’s homepage", href: "/" },
                { label: "About Sabin", href: "/about" },
                { label: "Selected projects", href: "/projects" },
                { label: "Contact Sabin", href: "/contact" },
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
                      className="inline-flex items-center gap-2 rounded-full bg-[#141414] px-4 py-2.5 text-sm text-white/82 transition-colors hover:bg-[#1c1c1c]"
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

            <h3 className="mt-7 text-sm uppercase tracking-[0.24em] text-white/45">
              Share portfolio
            </h3>
            <div className="mt-4 flex items-center gap-2">
              {shareLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    title={link.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141414] text-white/75 transition-colors hover:bg-[#1c1c1c] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
              <button
                type="button"
                onClick={handleNativeShare}
                aria-label="Share portfolio or copy link"
                title="Share portfolio or copy link"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141414] text-white/75 transition-colors hover:bg-[#1c1c1c] hover:text-white"
              >
                <Share2 className="h-4 w-4" />
              </button>
              <span className="sr-only" aria-live="polite">
                {shareStatus}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Sabin Paudel. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
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
