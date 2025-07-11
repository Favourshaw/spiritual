"use client";

import Navbar from "@/components/nav";
import Hero from "./home/hero";
import { motion } from "framer-motion";
import ServicesSection from "./home/services";
import Footer from "@/components/footer";
import TestimonialsSection from "./home/testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <motion.div
        className="min-h-screen overflow-hidden pt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <main>
          <Hero />
          <TestimonialsSection />
          <ServicesSection />
        </main>

        <Footer />

        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#50245e] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/3 w-3 h-3 bg-[#532661] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#4c2558] rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
