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
        Hello! I'm M Bagus Rizky, a passionate developer who loves creating beautiful and functional web experiences.
        I specialize in modern web technologies and enjoy working on projects that make a difference.
      </p>
      <p className="text-muted-foreground text-sm sm:text-base">
        When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
        or enjoying some time outdoors.
      </p>
    </motion.div>
  )
}