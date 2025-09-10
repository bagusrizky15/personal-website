"use client"

import { MenuBar } from "@/components/menu-bar"
import { ThemeToggle } from "@/components/theme-toggle"
import { BadgeCheck } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useState } from "react"
import { Bio } from "@/components/bio"
import { Projects } from "@/components/projects"
import { SocialMedia } from "@/components/social-media"

export default function Page() {
  const [activeMenu, setActiveMenu] = useState("Hi")

  return (
    <div className="relative min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="flex flex-col pt-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-semibold">M Bagus Rizky</h1>
                  <BadgeCheck className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Fullstack Developer | N8N Automation | Vibe Coding
                </p>
              </div>
              <div className="self-start sm:self-center">
                <ThemeToggle />
              </div>
            </div>
            <div className="mb-6">
              <MenuBar activeItem={activeMenu} setActiveItem={setActiveMenu} />
            </div>
            <div className="w-full">
              {activeMenu === "Hi" && <Bio />}
              {activeMenu === "Projects" && <Projects />}
              {activeMenu === "Social Media" && <SocialMedia />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
