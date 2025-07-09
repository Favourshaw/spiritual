"use client";
import { motion } from "framer-motion";
import { Flower, Heart, Sun } from "lucide-react"; // You can customize with spiritual icons

const services = [
  {
    icon: <Sun className="h-8 w-8 text-pink-500" />,
    title: "Energy Healing",
    desc: "Balance your inner energy and align your chakras through personalized healing sessions.",
  },
  {
    icon: <Flower className="h-8 w-8 text-pink-500" />,
    title: "Spiritual Guidance",
    desc: "Receive messages from spirit guides to find clarity and peace.",
  },
  {
    icon: <Heart className="h-8 w-8 text-pink-500" />,
    title: "Meditation Coaching",
    desc: "Learn to calm your mind and reconnect with your true self.",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="bg-white py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-3xl text-center text-pink-600 font-medium mb-10">
        My Offerings
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="p-6 bg-pink-50 rounded-xl shadow-md text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-xl text-pink-700 font-semibold mb-2">
              {s.title}
            </h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
