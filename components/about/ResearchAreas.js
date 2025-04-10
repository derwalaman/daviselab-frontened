"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Bot, Camera } from "lucide-react";

const areas = [
  {
    icon: <Camera size={32} strokeWidth={2.5} />,
    title: "Computer Vision",
    desc: "Deep learning and vision-based systems for real-time visual understanding.",
  },
  {
    icon: <BrainCircuit size={32} strokeWidth={2.5} />,
    title: "Artificial Intelligence",
    desc: "Developing ML models that power intelligent and adaptive decision-making.",
  },
  {
    icon: <Bot size={32} strokeWidth={2.5} />,
    title: "Robotics",
    desc: "Autonomous robots engineered for precision tasks and dynamic environments.",
  },
];

const ResearchAreas = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Core Research Areas
        </h2>
        <p className="text-gray-500 text-md md:text-lg max-w-2xl mx-auto">
          DAVISE Lab focuses on cutting-edge technologies that shape the future of intelligence and automation.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {areas.map((area, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon Box */}
            <div className="w-14 h-14 flex items-center justify-center mb-6 bg-blue-100 text-blue-800 rounded-xl shadow-inner shadow-blue-200">
              {area.icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResearchAreas;
