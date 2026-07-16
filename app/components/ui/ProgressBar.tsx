"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.05, 1], [0, 1, 1, 1]);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[3px]"
        style={{ scaleX, opacity }}
      >
        <div className="h-full w-full bg-[linear-gradient(90deg,var(--brand-primary),rgba(255,255,255,0.5),var(--brand-signal))]" />
      </motion.div>

      <motion.div
        className="fixed top-0 z-[60] h-[3px] w-1"
        style={{
          left: useSpring(scrollYProgress, {
            stiffness: 120,
            damping: 25,
          }),
          opacity,
        }}
      >
        <motion.div
          className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </>
  );
}
