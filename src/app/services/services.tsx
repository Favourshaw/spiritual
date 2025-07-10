import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Flower,
  Sparkles,
  Moon,
  Sun,
  Flower2,
  Clock,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
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
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/30 to-rose-50/50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
            Our
            <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent font-medium">
              {" "}
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of spiritual healing services
            designed to nurture your mind, body, and soul
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full bg-white border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardHeader className="text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-medium text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-center space-x-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-lg font-semibold text-pink-600">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
