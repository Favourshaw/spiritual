"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a royalty-free ambient spiritual music URL
  // In a real project, you'd host your own audio file
  const musicUrl = "/music.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log("Autoplay prevented by browser");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="music-controls">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-pink-100"
      >
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={togglePlay}
            className="rounded-full w-10 h-10 p-0 hover:bg-pink-100 transition-colors duration-200"
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Pause className="w-4 h-4 text-[#b497bd]" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play className="w-4 h-4 text-[#b497bd]" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="rounded-full w-10 h-10 p-0 hover:bg-pink-100 transition-colors duration-200"
          >
            <AnimatePresence mode="wait">
              {isMuted ? (
                <motion.div
                  key="muted"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <VolumeX className="w-4 h-4 text-[#b497bd]" />
                </motion.div>
              ) : (
                <motion.div
                  key="volume"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Volume2 className="w-4 h-4 text-[#b497bd]" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        <motion.div
          className="absolute bottom-full right-0 mb-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-pink-100"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 h-2 bg-pink-200 rounded-lg appearance-none slider"
          />
        </motion.div>
      </motion.div>

      <audio
        ref={audioRef}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/music.mp3" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      <style>
        {`
          .slider::-webkit-slider-thumb {
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #f472b6;
            cursor: pointer;
          }
          .slider::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #f472b6;
            cursor: pointer;
            border: none;
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundMusic;
