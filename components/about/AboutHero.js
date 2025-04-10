"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900 text-white py-32 px-6 md:px-20">
      {/* Floating blob background */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-blue-600/30 blur-3xl rounded-full animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-blue-400">DAVISE Lab</span>
        </h1>
        <p className="text-blue-100 text-lg">
          <Typewriter
            words={[
              "Innovating in AI & Vision",
              "Building Smarter Systems",
              "Pushing Robotics Research",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </p>
      </motion.div>
    </section>
  );
}
