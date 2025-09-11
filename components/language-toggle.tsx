"use client"

import { Languages } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/components/translation-context"

interface LanguageToggleProps {
  language: "en" | "id"
  onLanguageChange: (language: "en" | "id") => void
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  // We don't use the translation hook here because we want to show the language names in their native forms
  // English and Indonesian (not translated versions)
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Select language"
        >
          <span className="text-sm font-medium">{language === "en" ? "EN" : "ID"}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => onLanguageChange("en")}
          className={language === "en" ? "bg-accent" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => onLanguageChange("id")}
          className={language === "id" ? "bg-accent" : ""}
        >
          Indonesian
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}