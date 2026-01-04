"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/components/translation-context"
import { useState, useRef } from "react"
import { ChevronRight } from "lucide-react"
import { ConvertWordToPdf } from "@/app/pages/apps/convert-word-to-pdf/convert-word-to-pdf"
import { ShortUrlGenerator } from "@/app/pages/apps/short-url-generator/short-url-generator"

interface App {
  id: number
  titleKey: string
  descriptionKey: string
}

const getApps = (t: (key: string) => string): App[] =>[
  {
    id: 1,
    titleKey: "app.convertwordtopdf.title",
    descriptionKey: "app.convertwordtopdf.description"
  },
  {
    id: 2,
    titleKey: "app.shorturl.title",
    descriptionKey: "app.shorturl.description"
  }
]

export function Apps() {
  const { t } = useTranslation()
  const apps = getApps(t)
  const [selectedApp, setSelectedApp] = useState<App | null>(null)

  const handleBackToMenu = () => {
    setSelectedApp(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 sm:mt-6 w-full text-left"
    >
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <h2 
          className={`text-xl sm:text-2xl font-bold ${selectedApp ? "cursor-pointer hover:opacity-70" : ""}`}
          onClick={handleBackToMenu}
        >
          {t("menu.apps")}
        </h2>
        {selectedApp && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              {t(selectedApp.titleKey)}
            </h2>
          </motion.div>
        )}
      </div>

      {!selectedApp ? (
        <div className="flex flex-col gap-4 sm:gap-6">
          {apps.map((app) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedApp(app)}
              className="border border-border rounded-xl p-4 sm:p-6 bg-card hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{t(app.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {t(app.descriptionKey)}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <>
          {selectedApp.id === 1 && <ConvertWordToPdf />}
          {selectedApp.id === 2 && <ShortUrlGenerator />}
        </>
      )}
    </motion.div>
  )
}