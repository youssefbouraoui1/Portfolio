"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Youssef Bouraoui</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Software Engineer</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Specializing in full-stack development, cloud technologies, and DevOps
        </p>
        <Button onClick={scrollToAbout} className="group">
          Learn more
          <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
        </Button>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
        <Image src="/my-image.jpg" alt="Youssef Bouraoui" fill className="object-cover" />
        </div>
      </motion.div>
    </section>
  )
}
