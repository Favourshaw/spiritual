import React from "react";
import { motion } from "framer-motion";
import { Heart, Flower, Sparkles, Moon, Sun, Flower2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Heart,
    title: "Energy Healing",
    description:
      "Restore balance and harmony through gentle energy work and chakra alignment.",
    color: "from-pink-200 to-rose-300",
  },
  {
    icon: Flower,
    title: "Meditation Guidance",
    description:
      "Learn mindfulness techniques and discover inner peace through guided meditation.",
    color: "from-rose-200 to-pink-300",
  },
  {
    icon: Sparkles,
    title: "Spiritual Counseling",
    description:
      "Navigate life challenges with spiritual wisdom and compassionate guidance.",
    color: "from-pink-300 to-rose-200",
  },
  {
    icon: Moon,
    title: "Crystal Therapy",
    description:
      "Harness the healing power of crystals to cleanse and energize your aura.",
    color: "from-rose-300 to-pink-200",
  },
  {
    icon: Sun,
    title: "Reiki Sessions",
    description:
      "Experience deep relaxation and healing through traditional Japanese Reiki.",
    color: "from-pink-200 to-rose-300",
  },
  {
    icon: Flower2,
    title: "Aromatherapy",
    description:
      "Enhance your wellbeing with therapeutic essential oils and sacred scents.",
    color: "from-rose-200 to-pink-300",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Sacred
            <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent font-medium">
              {" "}
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our holistic approaches to spiritual healing and personal
            transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full bg-white border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-medium text-gray-800 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-6 pt-4 border-t border-pink-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button className="text-pink-500 hover:text-pink-600 font-medium transition-colors duration-200">
                      Learn More →
                    </button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
