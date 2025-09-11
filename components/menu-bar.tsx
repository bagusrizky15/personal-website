"use client"

import type * as React from "react"
import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import {
  Briefcase,
  FileText,
  Share2,
  User,
  X,
  Zap
} from "lucide-react"
import { useTheme } from "next-themes"

interface MenuItem {
  icon: React.ReactNode
  label: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: <User className="h-4 w-4" />,
    label: "Hi",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <Briefcase className="h-4 w-4" />,
    label: "Projects",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <Share2 className="h-4 w-4" />,
    label: "Social Media",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <Zap className="h-4 w-4" />,
    label: "N8N",
    gradient: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(147, 51, 234, 0.06) 50%, rgba(126, 34, 206, 0) 100%)",
    iconColor: "text-purple-500",
  },
  {
    icon: <FileText className="h-4 w-4" />,
    label: "CV",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

interface MenuBarProps {
  activeItem: string
  setActiveItem: (item: string) => void
}

export function MenuBar({ activeItem, setActiveItem }: MenuBarProps) {
  const { theme } = useTheme()
  const [showConfirm, setShowConfirm] = useState(false)

  const isDarkTheme = theme === "dark"

  const handleCVClick = () => {
    setShowConfirm(true)
  }

  const confirmRedirect = () => {
    window.open("/cv.pdf", "_blank")
    setShowConfirm(false)
  }

  const cancelRedirect = () => {
    setShowConfirm(false)
  }

  return (
    <>
      <motion.nav
        className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className={`absolute -inset-2 bg-gradient-radial from-transparent ${
            isDarkTheme
              ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
              : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
          } to-transparent rounded-3xl z-0 pointer-events-none`}
          variants={navGlowVariants}
        />
        <ul className="grid grid-cols-5 gap-1 sm:gap-2 relative z-10">
          {menuItems.map((item, index) => (
            <motion.li key={item.label} className="relative">
              <motion.div
                className="block rounded-xl overflow-visible group relative"
                whileHover="hover"
                initial="initial"
                animate={activeItem === item.label ? "hover" : "initial"}
                onClick={() => {
                  if (item.label === "CV") {
                    handleCVClick()
                  } else {
                    setActiveItem(item.label)
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none"
                  variants={glowVariants}
                  style={{
                    background: item.gradient,
                    borderRadius: "16px",
                  }}
                />
                <div
                  className="flex items-center justify-center gap-2 px-2 py-1.5 sm:px-3 sm:py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl w-full cursor-pointer"
                >
                  <span
                    className={`transition-colors duration-300 ${activeItem === item.label ? "text-foreground" : `group-hover:${item.iconColor} text-foreground`}`}
                  >
                    {item.icon}
                  </span>
                  <span className={`text-xs sm:text-sm ${activeItem === item.label ? "text-foreground" : ""}`}>
                    {item.label}
                  </span>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Confirmation Dialog */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            className="w-full max-w-md rounded-2xl bg-background border border-border/40 shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">Confirm Redirect</h3>
                <button 
                  onClick={cancelRedirect}
                  className="p-1 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-4 text-muted-foreground">
                You will be redirected to another page. Do you want to continue?
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={cancelRedirect}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmRedirect}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  OK
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
