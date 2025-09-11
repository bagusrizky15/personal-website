"use client"

import { motion } from "framer-motion"

export function N8NContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 sm:mt-6 w-full text-left"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
        N8N Automation
      </h2>
      <p className="text-muted-foreground text-center text-md sm:text-md py-8">
        Coming Soon...
      </p>
    </motion.div>
  )
}