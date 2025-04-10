"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "AI in Agriculture",
      desc: "Detecting plant diseases using deep learning.",
      image: "/images/project1.jpg",
    },
    {
      title: "IoT for Smart Homes",
      desc: "Energy-efficient home automation systems.",
      image: "/images/project2.jpg",
    },
    {
      title: "Vision for Healthcare",
      desc: "Assisting doctors with AI-based diagnostics.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Dive into our top research projects revolutionizing industries with innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Link href="/projects" key={index}>
            <motion.div
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
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-3 px-6 rounded-full shadow transition duration-300"
        >
          Check out all Projects
        </Link>
      </div>
    </section>
  );
}
