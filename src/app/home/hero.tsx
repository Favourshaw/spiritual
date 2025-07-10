"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-pink-200/40"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={40} />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-pink-200/30"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Heart size={32} />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-pink-200/35"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Star size={28} />
        </motion.div>
      </div>

      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light text-gray-800 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Find Your
            <span className="block bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent font-medium">
              Inner Peace
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transform your life through spiritual healing, energy work, and
            mindful practices. Discover the path to wellness and enlightenment.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-300 to-rose-400 hover:from-pink-400 hover:to-rose-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 text-lg glow-animation"
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full px-8 py-3 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </section>
  );
}
