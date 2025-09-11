"use client"

import { createContext, useContext, ReactNode } from "react"

type Language = "en" | "id"

interface TranslationContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const translations = {
  en: {
    // Header
    "header.title": "M Bagus Rizky",
    "header.description": "Fullstack Developer | N8N Automation | Vibe Coding",
    
    // Menu items
    "menu.hi": "Hi",
    "menu.projects": "Projects",
    "menu.social_media": "Social Media",
    "menu.cv": "CV",
    "menu.n8n": "N8N",
    
    // General
    "coming_soon": "Coming Soon",
    
    // Bio section
    "bio.title": "Hi, I'm Bagus!",
    "bio.description": "I'm a Mobile Developer with expertise in creating seamless mobile applications. I also have the ability to develop websites and work with automation tools like n8n to streamline processes and enhance productivity.",
    "bio.description2": "Outside of coding, I enjoy exploring new mobile development trends, contributing to open-source projects, and sharing my knowledge through blogs and tutorials.",
    
    // Projects section
    "projects.title": "Projects",
    "projects.description": "Here are some of the projects I've worked on recently.",
    
    // Social Media section
    "social.title": "Connect With Me",
    "social.description": "Feel free to reach out to me on any of these platforms.",
    
    // Project cards
    "project.halo_bca.title": "Halo BCA",
    "project.halo_bca.description": "Halo BCA is an assistance and product services for BCA customers and non-customers that can be accessed at any time.",
    
    // Social media
    "social.github": "GitHub",
    "social.github.description": "Check out my code repositories and open source contributions",
    "social.linkedin": "LinkedIn",
    "social.linkedin.description": "Professional network and career updates",
    "social.youtube": "YouTube",
    "social.youtube.description": "Tutorials, tech reviews, and project showcases",
    "social.medium": "Medium",
    "social.medium.description": "In-depth articles on web development and technology",
    "social.twitter": "Twitter",
    "social.email": "Email",
    
    // Confirmation dialog
    "confirm.redirect.title": "Confirm Redirect",
    "confirm.redirect.message": "You will be redirected to another page. Do you want to continue?",
    "confirm.redirect.cancel": "Cancel",
    "confirm.redirect.ok": "OK",
  },
  id: {
    // Header
    "header.title": "M Bagus Rizky",
    "header.description": "Fullstack Developer | N8N Automation | Vibe Coding",
    
    // Menu items
    "menu.hi": "Hi",
    "menu.projects": "Projects",
    "menu.social_media": "Social Media",
    "menu.cv": "CV",
    "menu.n8n": "N8N",
    
    // General
    "coming_soon": "Coming Soon",
    
    // Bio section
    "bio.title": "Halo, Saya Bagus!",
    "bio.description": "Saya seorang Mobile Developer dengan keahlian dalam menciptakan aplikasi mobile yang mulus. Saya juga memiliki kemampuan untuk mengembangkan website dan bekerja dengan alat otomatisasi seperti n8n untuk menyederhanakan proses dan meningkatkan produktivitas.",
    "bio.description2": "Di luar coding, saya menikmati mengeksplorasi tren pengembangan mobile terbaru, berkontribusi pada proyek open-source, dan membagikan pengetahuan saya melalui blog dan tutorial.",
    
    // Projects section
    "projects.title": "Projects",
    "projects.description": "Berikut adalah beberapa proyek yang telah saya kerjakan baru-baru ini.",
    
    // Social Media section
    "social.title": "Connect With Me",
    "social.description": "Jangan ragu untuk menghubungi saya di platform mana pun ini.",
    
    // Project cards
    "project.halo_bca.title": "Halo BCA",
    "project.halo_bca.description": "Halo BCA adalah layanan bantuan dan produk untuk nasabah dan non-nasabah BCA yang dapat diakses kapan saja.",
    
    // Social media
    "social.github": "GitHub",
    "social.github.description": "Lihat repositori kode saya dan kontribusi open source",
    "social.linkedin": "LinkedIn",
    "social.linkedin.description": "Jaringan profesional dan pembaruan karier",
    "social.youtube": "YouTube",
    "social.youtube.description": "Tutorial, ulasan teknologi, dan showcase proyek",
    "social.medium": "Medium",
    "social.medium.description": "Artikel mendalam tentang pengembangan web dan teknologi",
    "social.twitter": "Twitter",
    "social.email": "Email",
    
    // Confirmation dialog
    "confirm.redirect.title": "Konfirmasi",
    "confirm.redirect.message": "Anda akan dialihkan ke halaman lain. Apakah Anda ingin melanjutkan?",
    "confirm.redirect.cancel": "Batal",
    "confirm.redirect.ok": "OK",
  },
}

export function TranslationProvider({ 
  children, 
  language,
  setLanguage
}: { 
  children: ReactNode; 
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}