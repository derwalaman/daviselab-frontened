"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UpcomingProjects() {
  const projects = [
    {
      title: "AI in Agriculture",
      desc: "Detecting plant diseases using deep learning for efficient and sustainable farming.",
      image: "/images/project1.jpg",
    },
    {
      title: "IoT for Smart Homes",
      desc: "Energy-efficient home automation systems for a connected and smarter lifestyle.",
      image: "/images/project2.jpg",
    },
    {
      title: "Vision for Healthcare",
      desc: "AI-powered diagnostic tools assisting doctors in faster, more accurate treatments.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f9fafc] to-[#eef2f7] py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl font-bold text-gray-800">Upcoming Projects</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Glimpse into our exciting future work aimed at solving real-world problems
          with cutting-edge tech and interdisciplinary research.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={350}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
