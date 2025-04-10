"use client";

import { motion } from "framer-motion";

export default function AboutMission() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-gray-600 text-lg">
          At DAVISE Lab, we aim to create impactful solutions through cutting-edge research
          in artificial intelligence, robotics, and computer vision. We believe in combining
          academic excellence with real-world application to transform tomorrow’s technologies.
        </p>
      </motion.div>
    </section>
  );
}
