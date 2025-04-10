"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const researchProjects = [
  {
    title: "Vision-based Navigation in Drones",
    description: "Exploring AI-powered visual navigation for autonomous drones in complex environments.",
    image: "/images/lab3.png",
  },
  {
    title: "AI for Medical Imaging",
    description: "Using deep learning to enhance diagnostics in radiology and biomedical imaging.",
    image: "/images/lab1.png",
  },
  {
    title: "Robotics & Manipulation",
    description: "Designing robotic arms for real-world tasks with precise perception and control.",
    image: "/images/lab2.png",
  },
];

const ResearchHighlights = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800">Research Highlights</h2>
        <p className="mt-3 text-lg text-gray-600">
          Explore our impactful projects in AI, computer vision, and robotics.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {researchProjects.map((project, index) => (
          <Link href="/research" key={index}>
            <motion.div
              whileHover={{ y: -4, opacity: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transform will-change-transform"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link href="/research">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3 rounded-full transition duration-300">
            View All Research
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ResearchHighlights;
