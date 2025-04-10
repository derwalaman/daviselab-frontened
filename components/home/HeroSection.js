'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-100 py-24 px-6 md:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Welcome to DAVISE Lab @ NIT Delhi
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Bridging the gap between imagination and innovation through cutting-edge research in AI,
          Robotics, and Computer Vision.
        </p>
        <Link href="/about">
          <Button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white text-md">
            Know More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
