"use client";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import React from "react";
import Services from "./services";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <motion.div
      className="min-h-screen overflow-hidden "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Nav />
      <Services />
      <Footer />
    </motion.div>
  );
};

export default Service;
