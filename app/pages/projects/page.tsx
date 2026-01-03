"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Globe } from "lucide-react"
import { useTranslation } from "@/components/translation-context"

interface Project {
  id: number
  titleKey: string
  descriptionKey: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: 1,
    titleKey: "project.halo_bca.title",
    descriptionKey: "project.halo_bca.description",
    technologies: ["Swift", "UIKit", "SwiftUI", "Firebase"],
    // githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://apps.apple.com/id/app/halo-bca/id1527740494"
  }
  // {
  //   id: 2,
  //   titleKey: "project.task_management.title",
  //   descriptionKey: "project.task_management.description",
  //   technologies: ["Next.js", "Firebase", "Tailwind CSS"],
  //   githubUrl: "https://github.com/example/task-manager",
  //   liveUrl: "https://tasks.example.com"
  // },
  // {
  //   id: 3,
  //   titleKey: "project.weather_dashboard.title",
  //   descriptionKey: "project.weather_dashboard.description",
  //   technologies: ["React", "OpenWeather API", "Chart.js"],
  //   githubUrl: "https://github.com/example/weather-dashboard"
  // },
  // {
  //   id: 4,
  //   titleKey: "project.portfolio.title",
  //   descriptionKey: "project.portfolio.description",
  //   technologies: ["TypeScript", "Next.js", "Framer Motion"],
  //   liveUrl: "https://portfolio.example.com"
  // }
]

export function Projects() {
  const { t } = useTranslation()
  const projects = getProjects(t)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 sm:mt-6 w-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t("projects.title")}</h2>
      <div className="flex flex-col gap-4 sm:gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-border rounded-xl p-4 sm:p-6 bg-card hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t(project.titleKey)}</h3>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{t(project.descriptionKey)}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-secondary text-secondary-foreground text-xs sm:text-sm rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-foreground transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>App Store</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}