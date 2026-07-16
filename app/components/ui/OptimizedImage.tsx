"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/app/lib/utils/cn";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", fill && "h-full w-full", className)}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-white/5" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={cn("object-cover", fill && "h-full w-full", className)}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
      />
    </div>
  );
}
