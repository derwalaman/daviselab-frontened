"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-[#2e2e2e] mb-6">About DAVISE Lab</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          The <strong>DAVISE Lab</strong> at NIT Delhi is a multidisciplinary research group focused on
          innovative developments in <span className="text-[#7b3fe4] font-semibold">computer vision</span>,{" "}
          <span className="text-[#e08f3e] font-semibold">artificial intelligence</span>, and{" "}
          <span className="text-[#3e9ee0] font-semibold">robotics</span>. Our mission is to drive real-world impact
          through cutting-edge technologies, collaborative research, and industry engagement.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
