// components/TestimonialsSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Nina Patel",
    role: "Realtor",
    content:
      "After working with the temple’s abundance meditations, I closed three real estate deals in one week. My finances are flowing like never before!",
    rating: 5,
    image: "💰",
  },
  {
    name: "Brian Okafor",
    role: "Marketing Consultant",
    content:
      "I cleared deep limiting beliefs around money with their energy sessions. My income doubled in just two months.",
    rating: 5,
    image: "💼",
  },
  {
    name: "Yasmin El-Khoury",
    role: "Life Coach",
    content:
      "Their sacred abundance rituals shifted my entire money mindset. Opportunities and clients keep pouring in.",
    rating: 5,
    image: "🌟",
  },
  {
    name: "Carlos Rivera",
    role: "Freelancer",
    content:
      "Thanks to their manifestation guidance, I now earn more than I did at my 9–5. I'm free and thriving.",
    rating: 5,
    image: "📈",
  },
  {
    name: "Amara Jones",
    role: "Holistic Therapist",
    content:
      "Spiritual coaching helped me align with purpose and profit. I’m now booked out for months and financially stable.",
    rating: 5,
    image: "💎",
  },
  {
    name: "Liam Nguyen",
    role: "App Developer",
    content:
      "I gained not just inner peace but financial clarity. I landed my dream job after a guided session.",
    rating: 5,
    image: "📲",
  },
  {
    name: "Chloe Bennett",
    role: "Fashion Designer",
    content:
      "Their crystal abundance grids and rituals opened the door to new contracts and income streams. I feel empowered.",
    rating: 5,
    image: "👗",
  },
  {
    name: "Jonathan Lee",
    role: "Investor",
    content:
      "After attending just two abundance ceremonies, I made my most successful financial investment to date.",
    rating: 5,
    image: "🧘‍♂️",
  },
  {
    name: "Elena Morozova",
    role: "Healer",
    content:
      "The emotional healing helped me raise my vibration. I’m finally attracting abundance without burnout.",
    rating: 5,
    image: "🌈",
  },
  {
    name: "Noah Anderson",
    role: "Photographer",
    content:
      "Every session unlocks new levels of peace and confidence. My art now sells internationally — and effortlessly.",
    rating: 5,
    image: "📷",
  },
  {
    name: "Priya Desai",
    role: "Writer",
    content:
      "The guided soul meditations unblocked creative flow and financial prosperity. I finally landed a book deal!",
    rating: 5,
    image: "📚",
  },
  {
    name: "Jamal Harris",
    role: "Musician",
    content:
      "After years of struggle, I’ve found harmony — spiritually and financially. My music now supports my lifestyle fully.",
    rating: 5,
    image: "🎶",
  },
  {
    name: "Lucia Moretti",
    role: "Yoga Instructor",
    content:
      "The Reiki sessions helped me release fear around money. My studio now has more students than ever before.",
    rating: 5,
    image: "🧘‍♀️",
  },
  {
    name: "Ethan Brooks",
    role: "Tech Entrepreneur",
    content:
      "My startup exploded after attending their prosperity activation. The spiritual and financial gains are real.",
    rating: 5,
    image: "🚀",
  },
  {
    name: "Zara Khalid",
    role: "Content Creator",
    content:
      "I went from burnout to breakthrough. I’m earning more from my platform and feel spiritually aligned.",
    rating: 5,
    image: "📹",
  },
  {
    name: "Sarah Johnson",
    role: "Wellness Coach",
    content:
      "The energy healing sessions have completely transformed my life. I feel more balanced, peaceful, and connected to my true self than ever before.",
    rating: 5,
    image: "✨",
  },
  {
    name: "Michael Chen",
    role: "Artist",
    content:
      "The meditation guidance helped me find clarity during a difficult period. The spiritual counseling was exactly what my soul needed.",
    rating: 5,
    image: "🌙",
  },
  {
    name: "Emma Rodriguez",
    role: "Teacher",
    content:
      "Crystal therapy and Reiki sessions have brought such peace into my daily life. I recommend these services to anyone seeking genuine healing.",
    rating: 5,
    image: "🌸",
  },
  {
    name: "David Wilson",
    role: "Entrepreneur",
    content:
      "The holistic approach to spiritual wellness here is remarkable. Each session leaves me feeling renewed and more centered in my purpose.",
    rating: 5,
    image: "🕊️",
  },
  {
    name: "Lisa Thompson",
    role: "Nurse",
    content:
      "After years of stress, I finally found my inner peace through these beautiful healing practices. Truly life-changing experience.",
    rating: 5,
    image: "💫",
  },
  {
    name: "James Parker",
    role: "Writer",
    content:
      "The spiritual guidance and energy work have opened up new dimensions of creativity and peace in my life. Absolutely transformative.",
    rating: 5,
    image: "🦋",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState<null | number>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + (isMobile ? 1 : 2)) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const goTo = (dir: "next" | "prev") => {
    setIndex((prev) => {
      const step = isMobile ? 1 : 2;
      if (dir === "next") return (prev + step) % testimonials.length;
      return (prev - step + testimonials.length) % testimonials.length;
    });
  };

  const visibleTestimonials = isMobile
    ? [testimonials[index]]
    : [testimonials[index], testimonials[(index + 1) % testimonials.length]];

  return (
    <section className="py-24 px-4 bg-gradient-to-t from-pink-50/30 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-pink-400 to-[#b497bd] bg-clip-text text-transparent font-semibold">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-[#b497bd] max-w-2xl mx-auto">
            Testimonials from those whose spirits were uplifted by our healing
            services.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                className="cursor-grab active:cursor-grabbing"
                onClick={() => setShowModal(index + i)}
              >
                <Card className="bg-white/80 border border-pink-100 shadow-2xl rounded-3xl backdrop-blur-xl transition-transform hover:scale-[1.015] p-6">
                  <CardContent className="p-10 flex flex-col items-center text-center space-y-4">
                    <h4 className="font-semibold text-gray-800 text-xl tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#b497bd] fill-current"
                        />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-pink-300 opacity-40" />
                    <p className="text-gray-600 italic leading-relaxed">
                      &apos;{testimonial.content.slice(0, 120)}...&apos;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          <button
            onClick={() => goTo("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-pink-100"
          >
            <ChevronLeft className="w-6 h-6 text-[#b497bd]" />
          </button>
          <button
            onClick={() => goTo("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-pink-100"
          >
            <ChevronRight className="w-6 h-6 text-[#b497bd]" />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-3">
          {Array.from({
            length: Math.ceil(testimonials.length / (isMobile ? 1 : 2)),
          }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(index / (isMobile ? 1 : 2)) === i
                  ? "bg-[#b497bd] scale-110"
                  : "bg-pink-200"
              }`}
              onClick={() => setIndex(i * (isMobile ? 1 : 2))}
            />
          ))}
        </div>

        {showModal !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 relative"
            >
              <button
                onClick={() => setShowModal(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-pink-500"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-center space-y-4">
                <div className="text-6xl">{testimonials[showModal].image}</div>
                <h4 className="text-2xl font-semibold text-gray-800">
                  {testimonials[showModal].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[showModal].role}
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[showModal].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-pink-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {testimonials[showModal].content}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
