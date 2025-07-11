"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia R.",
    text: "I found peace and clarity after just one session. Truly life-changing!",
  },
  {
    name: "Daniel T.",
    text: "Emma’s energy work helped me reconnect with my purpose.",
  },
  {
    name: "Lila M.",
    text: "The most calming and uplifting spiritual experience I’ve ever had.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-3xl text-center text-pink-600 font-medium mb-10">
        What Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-pink-50 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 italic">&apos;{t.text}&apos;</p>
            <p className="mt-4 font-semibold text-pink-700">– {t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
