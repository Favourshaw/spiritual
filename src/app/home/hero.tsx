"use client";

import FuzzyText from "@/components/fuzzy-text";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center bg-pink-50 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-4xl md:text-6xl text-pink-600 font-semibold mb-4">
        Welcome to the Temple of the
      </h1>

      <h1 className="text-4xl md:text-6xl text-pink-600 font-semibold mb-4">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.6}>
          Awakening Heart 💖
        </FuzzyText>
      </h1>
      <p className="text-lg md:text-xl text-pink-700 max-w-2xl">
        Embrace your spiritual journey with personalized healing and peace.
      </p>
    </motion.section>
  );
}
