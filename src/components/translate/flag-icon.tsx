"use client";

import Image from "next/image";
import { useState } from "react";

interface FlagIconProps {
  src: string;
  emoji: string;
  alt: string;
  className?: string;
}

export default function FlagIcon({
  src,
  emoji,
  alt,
  className = "w-5 h-5 rounded-sm",
}: FlagIconProps) {
  const [fallback, setFallback] = useState(false);

  return fallback ? (
    <span role="img" aria-label={alt} className={className}>
      {emoji}
    </span>
  ) : (
    <Image
      width={20}
      height={20}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      draggable={false}
      onError={() => setFallback(true)}
    />
  );
}
