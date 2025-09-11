"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/components/translation-context"

export function N8NContent() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 sm:mt-6 w-full text-left"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
        {t("menu.n8n")}
      </h2>
      <p className="text-muted-foreground text-center text-md sm:text-md py-8">
        {t("coming_soon")}
      </p>
    </motion.div>
  )
}