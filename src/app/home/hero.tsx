"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center bg-pink-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-4xl md:text-6xl text-pink-600 font-semibold mb-4"></h1>
      <p className="text-lg md:text-xl text-pink-700 max-w-2xl">
        Embrace your spiritual journey with personalized healing and peace.
      </p>
    </motion.section>
  );
}
