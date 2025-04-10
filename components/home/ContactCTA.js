"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ContactCTA = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 py-24 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Get in Touch with DAVISE Lab
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Whether you're interested in research, internships, or collaboration,
          we'd love to hear from you. Let's build the future of intelligent systems together.
        </p>

        <Link href="/contact">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition-all duration-300">
            Contact Us
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
