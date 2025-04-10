"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const InternshipCTA = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800">Intern with Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Join DAVISE Lab to work on cutting-edge research in computer vision, robotics, and AI. 
          Collaborate with top minds and gain hands-on experience in real-world innovation.
        </p>
        <Link href="/internship">
          <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white text-sm px-6 py-3 rounded-full transition duration-300">
            Apply Now
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default InternshipCTA;
