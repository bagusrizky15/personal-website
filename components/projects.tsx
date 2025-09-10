"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Globe } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Halo BCA",
    description: "Halo BCA is an assistance and product services for BCA customers and non-customers that can be accessed at any time.",
    technologies: ["Swift", "UIKit", "SwiftUI", "Firebase"],
    // githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://apps.apple.com/id/app/halo-bca/id1527740494"
  }
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description: "A productivity application for managing tasks and projects with real-time collaboration features.",
  //   technologies: ["Next.js", "Firebase", "Tailwind CSS"],
  //   githubUrl: "https://github.com/example/task-manager",
  //   liveUrl: "https://tasks.example.com"
  // },
  // {
  //   id: 3,
  //   title: "Weather Dashboard",
  //   description: "A responsive weather dashboard that displays current conditions and forecasts for multiple locations.",
  //   technologies: ["React", "OpenWeather API", "Chart.js"],
  //   githubUrl: "https://github.com/example/weather-dashboard"
  // },
  // {
  //   id: 4,
  //   title: "Portfolio Website",
  //   description: "A modern portfolio website showcasing design and development projects with smooth animations.",
  //   technologies: ["TypeScript", "Next.js", "Framer Motion"],
  //   liveUrl: "https://portfolio.example.com"
  // }
]

export function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 sm:mt-6 w-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">My Projects</h2>
      <div className="flex flex-col gap-4 sm:gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-border rounded-xl p-4 sm:p-6 bg-card hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
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