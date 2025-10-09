"use client"

import { motion } from "framer-motion"
import { 
  Github, 
  Linkedin, 
  Globe,
  Youtube,
  BookText,
  Mail,
} from "lucide-react"
import { useTranslation } from "@/components/translation-context"

interface SocialLink {
  id: number
  nameKey: string
  url: string
  icon: React.ReactNode
  username: string
  descriptionKey: string
}

const getSocialLinks = (t: (key: string) => string): SocialLink[] => [
  {
    id: 1,
    nameKey: "social.github",
    url: "https://github.com/bagusrizky15",
    icon: <Github className="h-5 w-5 sm:h-6 sm:w-6" />,
    username: "@bagusrizky15",
    descriptionKey: "social.github.description"
  },
  {
    id: 2,
    nameKey: "social.linkedin",
    url: "https://www.linkedin.com/in/mohamadbagusrizky/",
    icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />,
    username: "Mohamad Bagus Rizky",
    descriptionKey: "social.linkedin.description"
  },
  {
    id: 3,
    nameKey: "social.youtube",
    url: "https://www.youtube.com/@codewithbagus",
    icon: <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />,
    username: "Code With Bagus",
    descriptionKey: "social.youtube.description"
  },
  {
    id: 4,
    nameKey: "social.medium",
    url: "https://medium.com/@mohamad.15",
    icon: <BookText className="h-5 w-5 sm:h-6 sm:w-6" />,
    username: "@mohamad.15",
    descriptionKey: "social.medium.description"
  },
  {
    id: 5,
    nameKey: "social.gmail",
    url: "mailto:mbagusrizky15@gmail.com",
    icon: <Mail className="h-5 w-5 sm:h-6 smw-6" />,
    username: "mbagusrizky15@gmail.com",
    descriptionKey: "social.gmail.description"
  }
]

export function SocialMedia() {
  const { t } = useTranslation()
  const socialLinks = getSocialLinks(t)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 sm:mt-6 w-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t("social.title")}</h2>
      <div className="flex flex-col gap-3 sm:gap-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-border rounded-xl bg-card hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary text-secondary-foreground">
              {link.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base sm:text-lg">{t(link.nameKey)}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{link.username}</p>
              <p className="text-muted-foreground mt-1 text-xs sm:text-sm">{t(link.descriptionKey)}</p>
            </div>
            <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}