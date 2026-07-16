"use client";

import { useMousePosition } from "@/app/lib/hooks/useMousePosition";

export default function MousePointer() {
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
