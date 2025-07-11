"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Star } from "lucide-react";
import FuzzyText from "@/components/fuzzy-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-100 to-white">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-30 left-10 text-[#b497bd] "
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={40} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-[#b497bd]"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
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
          className="absolute bottom-40 left-20 text-[#b497bd]"
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Star size={28} />
        </motion.div>

        <motion.div
          className="absolute w-64 h-64 bg-pink-300/20 rounded-full blur-3xl"
          style={{ top: "15%", left: "50%" }}
          animate={{
            scale: [1, 1.1, 1],
            filter: [
              "hue-rotate(0deg)",
              "hue-rotate(90deg)",
              "hue-rotate(0deg)",
            ],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-80 h-80 bg-[#b497bd] rounded-full blur-[120px]"
          style={{ bottom: "15%", left: "10%" }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-96 h-96 border-2 border-pink-100 rounded-full"
          style={{ top: "30%", right: "-100px" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute w-80 h-80 opacity-10"
          style={{ top: "10%", left: "10%" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/yoga.svg"
            alt="chakra mandala"
            width={500} // adjust width and height as needed
            height={500}
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#fce7f3"
              fillOpacity="1"
              d="M0,192L60,186.7C120,181,240,171,360,165.3C480,160,600,160,720,149.3C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1
            className="cursive text-5xl md:text-7xl font-light spirit leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to the Temple of the
            <motion.div
              className="cursive mx-auto justify-center flex"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <FuzzyText baseIntensity={0.06}>Awakening Heart 💖</FuzzyText>
            </motion.div>
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
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-300 to-[#b497bd] hover:from-pink-400 hover:to-[#b497bd] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 text-lg glow-animation"
                onClick={() => {
                  const section = document.getElementById("services");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Start Your Journey
              </Button>
            </Link>

            <a href="mailto:contact@templeofawakenings.com">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#b497bd] text-[#b497bd] hover:bg-pink-50 rounded-full px-8 py-3 text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
