"use client"

import { motion } from "framer-motion"

export function Bio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 sm:mt-6 w-full text-left"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About Me</h2>
      <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
        Hi! I'm Bagus, a profesional iOS developer who loves creating beautiful and functional mobile app experiences.
        I specialize in modern mobile app technologies and enjoy working on projects that make a difference.
      </p>
    </motion.div>
  )
}