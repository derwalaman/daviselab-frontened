"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const members = [
  { name: "Dr. Sahil", role: "Lab Director", image: "/images/team/male.png" },
  { name: "Priya Sharma", role: "PhD Researcher", image: "/images/team/female.png" },
  { name: "Aman Derwal", role: "BTech Scholar", image: "/images/team/male.png" },
];

export default function TeamPreview() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="transition transform duration-300"
            >
              <Image
                src={m.image}
                alt={m.name}
                width={160}
                height={160}
                className="rounded-full mx-auto mb-4 object-cover h-40 w-40 border-4 border-blue-200"
              />
              <h4 className="text-lg font-semibold text-gray-800">{m.name}</h4>
              <p className="text-gray-500 text-sm">{m.role}</p>
            </motion.div>
          ))}
        </div>

        <Link href="/team">
          <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Meet the Full Team
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
