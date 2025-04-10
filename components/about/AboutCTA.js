"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-blue-950 text-white text-center overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 800 400" preserveAspectRatio="none">
          <path d="M0,100 C200,200 400,0 800,100 L800,400 L0,400 Z" fill="#ffffff" />
        </svg>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Collaborate With Us</h2>
        <p className="mb-6 text-blue-200">
          Want to work with DAVISE Lab on research or student projects? We’re open to collaborations.
        </p>
        <Link href="/contact">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Get in Touch
          </button>
        </Link>
      </div>
    </section>
  );
}
