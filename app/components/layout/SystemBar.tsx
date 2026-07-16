"use client";

import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";

import { useTime } from "@/app/lib/hooks/useTime";

export default function SystemBar() {
  const time = useTime("hh:mm:ss");

  const [hours, minutes, seconds] = time.split(":");

  return (
    <div className="pointer-events-none fixed inset-x-0 top-20 z-50 hidden md:block">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        className="pointer-events-auto absolute right-0"
      >
        <div className="group relative overflow-hidden rounded-l-full border border-r-0 border-white/15 bg-black/55 px-3 py-2 backdrop-blur-md transition-all duration-500 hover:pr-5 sm:px-4">
          <div className="absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(91,124,255,0.12),transparent)] opacity-80" />

          <div className="relative flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5">
              <Clock3 className="h-3.5 w-3.5 text-white" />
            </div>

            <div className="flex items-end gap-2">
              <div
                className="flex items-baseline gap-1 text-right"
                style={{
                  fontFamily:
                    "var(--font-time), var(--font-geist-mono), monospace",
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
