"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Language } from "@/components/translation-context"

interface LanguageToggleProps {
  language: Language
  onLanguageChange: (language: Language) => void
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Select language"
        >
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
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
        <DropdownMenuItem 
          onClick={() => onLanguageChange("ja")}
          className={language === "ja" ? "bg-accent" : ""}
        >
          Japan
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => onLanguageChange("zh")}
          className={language === "zh" ? "bg-accent" : ""}
        >
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}