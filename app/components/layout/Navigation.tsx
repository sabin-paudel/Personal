"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ui/ThemeToggle";
import MagneticWrapper from "@/app/components/animations/MagneticWrapper";
import { Home, Briefcase, User, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Work", href: "/projects", icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
] as const;

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 top-auto z-50 w-[calc(100%-0.75rem)] max-w-[95%] -translate-x-1/2 sm:bottom-auto sm:top-4 sm:w-full sm:max-w-xl"
    >
      {/* Glass Container */}
      <div className="flex items-center justify-between gap-1 overflow-x-auto rounded-2xl bg-[#0a0a0a]/95 px-2 py-2.5 sm:gap-2 sm:rounded-full sm:bg-black/45 sm:px-3 sm:py-2.5 sm:shadow-[0_12px_40px_rgba(0,0,0,0.3)] sm:backdrop-blur-xl">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <MagneticWrapper key={item.href} strength={0.12}>
              <Link
                href={item.href}
                className={cn(
                  "flex shrink-0 items-center gap-1 rounded-full px-4 py-3 text-xs font-medium whitespace-nowrap transition-all duration-200 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm md:text-base",
                  "hover:bg-white/5",
                  isActive
                    ? "bg-[color:var(--brand-primary)]/16 text-white"
                    : "text-zinc-300 hover:text-white",
                )}
              >
                <Icon className="h-6 w-6 sm:h-4 sm:w-4" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            </MagneticWrapper>
          );
        })}

        <span className="mx-1 hidden h-6 w-px shrink-0 bg-white/20 dark:bg-white/30 sm:block" />

        {/* Theme Toggle inline */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-auto sm:w-auto">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
