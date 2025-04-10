"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const InfrastructurePreview = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Lab Infrastructure</h2>
        <p className="text-lg text-gray-600 mb-12">
          DAVISE Lab is fully equipped with advanced infrastructure including GPU servers, drone simulation zones, robotics kits, and experimental hardware setups for hands-on research.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <Image
                src={`/images/infra${item}.png`}
                alt={`Infrastructure ${item}`}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item === 1
                    ? "High-Performance GPU Clusters"
                    : item === 2
                    ? "Robotics Testing Lab"
                    : "Drone Flight Arena"}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {item === 1
                    ? "Train and deploy large-scale deep learning models with powerful GPUs."
                    : item === 2
                    ? "Experiment with robotic motion, sensors, and automation kits."
                    : "Indoor drone testing space for navigation and control algorithms."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default InfrastructurePreview;
