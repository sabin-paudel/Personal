"use client";

import { useEffect, useState } from "react";

function formatTime(date: Date) {
  const hours = date.getHours() % 12 || 12;
  return [hours, date.getMinutes(), date.getSeconds()]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}

export function useTime() {
  const [time, setTime] = useState<string>(() => formatTime(new Date()));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return time;
}
