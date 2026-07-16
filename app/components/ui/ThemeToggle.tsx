"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ThemeToggleProps {
  inline?: boolean;
}

export default function ThemeToggle({ inline = false }: ThemeToggleProps) {
  const [mode, setMode] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";

    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.classList.toggle("lamp-on", mode === "light");
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`${
        inline
          ? "flex items-center justify-center cursor-pointer rounded-full transition-all"
          : ""
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle lamp mode"
      title={mode === "light" ? "Switch to dark mode" : "Switch to lamp mode"}
    >
      <AnimatePresence mode="wait">
        {mode === "light" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-5 w-5 text-brand-signal" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-5 w-5 text-brand-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
