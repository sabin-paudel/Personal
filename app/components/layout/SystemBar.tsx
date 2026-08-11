"use client";

import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

import { useTime } from "@/app/lib/hooks/useTime";

export default function SystemBar() {
  const [showSystemBar, setShowSystemBar] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateVisibility = () => setShowSystemBar(mediaQuery.matches);

    updateVisibility();
    mediaQuery.addEventListener("change", updateVisibility);
    return () => mediaQuery.removeEventListener("change", updateVisibility);
  }, []);

  return showSystemBar ? <DesktopSystemBar /> : null;
}

function DesktopSystemBar() {
  const time = useTime();

  const [hours, minutes, seconds] = time.split(":");

  return (
    <div className="pointer-events-none fixed inset-x-0 top-20 z-50 hidden md:block">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        className="pointer-events-auto absolute right-0"
      >
        <div className="group relative overflow-hidden rounded-l-full bg-black/55 px-3 py-2 shadow-[0_12px_32px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-500 hover:pr-5 sm:px-4">
          <div className="relative flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.07]">
              <Clock3 className="h-3.5 w-3.5 text-white" />
            </div>

            <div className="flex items-end gap-2">
              <div
                className="flex items-baseline gap-1 text-right"
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                }}
              >
                <span className="text-sm tabular-nums tracking-[0.18em] text-white sm:text-base">
                  {hours}
                </span>
                <span className="text-xs tracking-[0.22em] text-white/40">
                  :
                </span>
                <span className="text-sm tabular-nums tracking-[0.18em] text-white sm:text-base">
                  {minutes}
                </span>
                <span className="text-xs tracking-[0.22em] text-white/40">
                  :
                </span>
                <span className="text-xs tabular-nums tracking-[0.22em] text-white/70">
                  {seconds}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
