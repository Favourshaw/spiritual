"use client";
import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.play().catch(() => {
        // Autoplay might be blocked; show a play button if needed.
      });
    }
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay>
      <source src="/music/background.mp3" type="audio/mpeg" />
    </audio>
  );
}
