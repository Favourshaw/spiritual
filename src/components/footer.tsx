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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
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
                Sacred <span className="font-medium text-pink-500">Spirit</span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Transform your life through spiritual healing, energy work, and
              mindful practices. Join us on a journey to inner peace and
              enlightenment.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-pink-600" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-gray-800 mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-pink-500 mr-3" />
                <span className="text-gray-600">hello@sacredspirit.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-pink-500 mr-3" />
                <span className="text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-pink-500 mr-3 mt-1" />
                <span className="text-gray-600">
                  123 Peaceful Lane
                  <br />
                  Serenity City, SC 12345
                </span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-gray-800 mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Energy Healing",
                "Meditation Guidance",
                "Spiritual Counseling",
                "Crystal Therapy",
                "Reiki Sessions",
                "Aromatherapy",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-pink-100 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500">
            © 2024 Sacred Spirit. Made with{" "}
            <Heart className="w-4 h-4 inline text-pink-500 fill-current" /> for
            your spiritual journey.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
