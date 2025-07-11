import React from "react";
import { motion } from "framer-motion";
import { Heart, Flower, Sparkles, Moon, Sun, Flower2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Abundance Activation",
    description:
      "Clear money blocks and activate your energy field for wealth and opportunity attraction.",
    duration: "60 minutes",
    price: "$110",
    color: "from-yellow-200 to-pink-300",
  },
  {
    icon: Sun,
    title: "Prosperity Alignment Session",
    description:
      "Align your chakras and subconscious with financial flow and business success.",
    duration: "75 minutes",
    price: "$125",
    color: "from-amber-200 to-pink-300",
  },
  {
    icon: Moon,
    title: "Money Manifestation Coaching",
    description:
      "Receive spiritual coaching focused on intention setting, visualization, and manifesting income.",
    duration: "90 minutes",
    price: "$140",
    color: "from-rose-100 to-yellow-200",
  },
  {
    icon: Heart,
    title: "Energy Healing",
    description:
      "Restore balance and harmony through gentle energy work and chakra alignment.",
    duration: "60 minutes",
    price: "$85",
    color: "from-pink-200 to-rose-300",
  },
  {
    icon: Flower,
    title: "Meditation Guidance",
    description:
      "Learn mindfulness techniques and discover inner peace through guided meditation.",
    duration: "45 minutes",
    price: "$65",
    color: "from-rose-200 to-pink-300",
  },
  {
    icon: Sparkles,
    title: "Spiritual Counseling",
    description:
      "Navigate life challenges with spiritual wisdom and compassionate guidance.",
    duration: "90 minutes",
    price: "$120",
    color: "from-pink-300 to-rose-200",
  },
  {
    icon: Moon,
    title: "Crystal Therapy",
    description:
      "Harness the healing power of crystals to cleanse and energize your aura.",
    duration: "75 minutes",
    price: "$95",
    color: "from-rose-300 to-pink-200",
  },
  {
    icon: Sun,
    title: "Reiki Sessions",
    description:
      "Experience deep relaxation and healing through traditional Japanese Reiki.",
    duration: "60 minutes",
    price: "$80",
    color: "from-pink-200 to-rose-300",
  },
  {
    icon: Flower2,
    title: "Aromatherapy",
    description:
      "Enhance your wellbeing with therapeutic essential oils and sacred scents.",
    duration: "50 minutes",
    price: "$70",
    color: "from-rose-200 to-pink-300",
  },

  // 🧿 Financial / Abundance Services
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-t from-white to-pink-50/30">
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
            <span className="bg-gradient-to-r from-pink-400 to-[#b497bd] bg-clip-text text-transparent font-medium">
              Services
            </span>
          </h2>
          <p className="text-xl text-[#b497bd] max-w-2xl mx-auto">
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
                <CardContent className="p-8 text-center h-full flex flex-col pt-6">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-200 to-[#b497bd] flex items-center justify-center`}
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
                    <button className="text-[#b497bd] hover:text-pink-600 font-medium transition-colors duration-200">
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
