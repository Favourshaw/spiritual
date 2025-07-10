import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-pink-50/30 py-16 px-4 border-t border-pink-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full flex items-center justify-center mr-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-800">
                Sacred{" "}
                <span className="font-medium text-[#b497bd]">Spirit</span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Transform your life through spiritual healing, energy work, and
              mindful practices. Join us on a journey to inner peace and
              enlightenment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-gray-800 mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#b497bd] mr-3" />
                <span className="text-gray-600">
                  contact@templeofawakenings.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-pink-100 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500">
            © 2025 Temple of Awakenings. Made with
            <Heart className="w-4 h-4 inline text-[#b497bd] fill-current" /> for
            your spiritual journey.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
