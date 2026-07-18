"use client";

import { useMousePosition } from "@/app/lib/hooks/useMousePosition";
import { useEffect, useState } from "react";

export default function MousePointer() {
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateVisibility = () => setShowGlow(mediaQuery.matches);

    updateVisibility();
    mediaQuery.addEventListener("change", updateVisibility);
    return () => mediaQuery.removeEventListener("change", updateVisibility);
  }, []);

  return showGlow ? <DesktopMouseGlow /> : null;
}

function DesktopMouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden opacity-70 lg:block"
      style={{
        background: `radial-gradient(circle 180px at ${x}px ${y}px, rgba(91, 124, 255, 0.08), transparent 60%)`,
      }}
    />
  );
}
