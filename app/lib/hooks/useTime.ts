"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

export function useTime(formatString: string = "hh:mm:ss") {
  const [time, setTime] = useState<string>(() =>
    format(new Date(), formatString),
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(format(new Date(), formatString));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [formatString]);

  return time;
}
