"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  children: ReactNode;
  content: string;
  delay?: number;
}

export default function Tooltip({
  children,
  content,
  delay = 0,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => {
        if (timerRef.current !== null) {
          window.clearTimeout(timerRef.current);
        }

        timerRef.current = window.setTimeout(() => setIsVisible(true), delay);
      }}
      onMouseLeave={() => {
        if (timerRef.current !== null) {
          window.clearTimeout(timerRef.current);
        }
        setIsVisible(false);
      }}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white shadow-xl pointer-events-none"
          >
            {content}
            <div className="absolute left-1/2 top-full -mt-1 -translate-x-1/2 border-4 border-transparent border-t-zinc-950" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
