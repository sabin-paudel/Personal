"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BubbleLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(circle at center, rgba(91, 124, 255, 0.12), transparent 35%), radial-gradient(circle at 70% 30%, rgba(255, 107, 44, 0.08), transparent 22%)",
            }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center gap-6 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="relative h-20 w-20"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <motion.div
                className="absolute inset-2 rounded-full border border-brand-primary/40"
                animate={{ scale: [1, 0.92, 1] }}
                transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
              />
              <div className="absolute inset-5 rounded-full bg-[color:var(--brand-signal)]/90 shadow-[0_0_24px_rgba(255,107,44,0.35)]" />
            </motion.div>

            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Aatreya
              </h1>
              <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/50">
                Crafting the interface layer
              </p>
            </div>

            <div className="h-0.5 w-52 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-full origin-left bg-[linear-gradient(90deg,var(--brand-primary),rgba(255,255,255,0.65),var(--brand-signal))]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
