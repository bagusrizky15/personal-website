"use client"

import { motion } from "framer-motion"
import { 
  Github, 
  Linkedin, 
  Globe,
  Youtube,
  BookText,
} from "lucide-react"

interface SocialLink {
  id: number
  name: string
  url: string
  icon: React.ReactNode
  username: string
  description: string
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/bagusrizky15",
    icon: <Github className="h-5 w-5 sm:h-6 sm:w-6" />,
    username: "@bagusrizky15",
    description: "Check out my code repositories and open source contributions"
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohamadbagusrizky/",
    icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />,
    username: "Mohamad Bagus Rizky",
    description: "Professional network and career updates"
  },
  {
    id: 3,
    name: "YouTube",
    url: "https://www.youtube.com/@codewithbagus",
    icon: <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />,
    username: "Code With Bagus",
    description: "Tutorials, tech reviews, and project showcases"
  },
  {
    id: 4,
    name: "Medium",
    url: "https://medium.com/@mohamad.15",
    icon: <BookText className="h-5 w-5 sm:h-6 sm:w-6" />,
    username: "@mohamad.15",
    description: "In-depth articles on web development and technology"
  }
]

export function SocialMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 sm:mt-6 w-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect with Me</h2>
      <div className="flex flex-col gap-3 sm:gap-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-border rounded-xl bg-card hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary text-secondary-foreground">
              {link.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base sm:text-lg">{link.name}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{link.username}</p>
              <p className="text-muted-foreground mt-1 text-xs sm:text-sm">{link.description}</p>
            </div>
            <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}