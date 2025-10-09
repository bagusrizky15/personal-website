"use client"

import { createContext, ReactNode, useContext } from "react"

export type Language = "en" | "id" | "ja"

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
    "bio.description": "I'm a mobile developer. I also develop websites and automation using n8n to simplify processes and increase productivity.",
    "bio.description2": "I love exploring new things and creating content on YouTube and Medium. Follow my social media to see the content I create.",
    
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
    "social.github.description": "See other code repositories and project portfolios",
    "social.linkedin": "LinkedIn",
    "social.linkedin.description": "Professional network and career updates",
    "social.youtube": "YouTube",
    "social.youtube.description": "Tutorials on app development and other explorations",
    "social.medium": "Medium",
    "social.medium.description": "Read my articles on medium",
    "social.gmail": "Gmail",
    "social.gmail.description": "Send me an email",
    
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
    "bio.description": "Saya seorang Mobile Developer. Saya juga mengembangkan website dan automation menggunakan n8n untuk menyederhanakan proses dan meningkatkan produktivitas.",
    "bio.description2": "Saya suka mengeksplorasi hal baru, dan membuat konten di youtube dan medium. Follow social media saya untuk melihat konten yang saya buat.",
    
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
    "social.github.description": "Lihat repositori kode dan portofolio project yang lainnya",
    "social.linkedin": "LinkedIn",
    "social.linkedin.description": "Lets Connect Linkedin",
    "social.youtube": "YouTube",
    "social.youtube.description": "Tutorial seputar development aplikasi dan eksplorasi lainnya.",
    "social.medium": "Medium",
    "social.medium.description": "Baca artikel yang saya buat di medium",
    "social.gmail": "Gmail",
    "social.gmail.description": "Kirim saya email",
    
    // Confirmation dialog
    "confirm.redirect.title": "Konfirmasi",
    "confirm.redirect.message": "Anda akan dialihkan ke halaman lain. Apakah Anda ingin melanjutkan?",
    "confirm.redirect.cancel": "Batal",
    "confirm.redirect.ok": "OK",
  },
  ja: {
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
    "coming_soon": "近日公開",

    // Bio section
    "bio.title": "Hi, I'm Bagus!",
    "bio.description": "私はモバイル開発者です。また、プロセスを簡素化し生産性を向上させるために、n8nを使用してウェブサイトや自動化も開発しています。",
    "bio.description2": "新しいことを探求し、YouTubeやMediumでコンテンツを作成するのが好きです。私が作成するコンテンツを見るために、私のソーシャルメディアをフォローしてください。",

    // Projects section
    "projects.title": "プロジェクト",
    "projects.description": "最近取り組んだプロジェクトの一部です。",

    // Social Media section
    "social.title": "私とつながる",
    "social.description": "これらのプラットフォームのいずれかで、お気軽にご連絡ください。",

    // Project cards
    "project.halo_bca.title": "Halo BCA",
    "project.halo_bca.description": "Halo BCAは、BCAの顧客および非顧客向けの支援および製品サービスで、いつでもアクセスできます。",

    // Social media
    "social.github": "GitHub",
    "social.github.description": "他のコードリポジトリやプロジェクトポートフォリオを見る",
    "social.linkedin": "LinkedIn",
    "social.linkedin.description": "プロフェッショナルネットワークとキャリアの最新情報",
    "social.youtube": "YouTube",
    "social.youtube.description": "アプリ開発やその他の探求に関するチュートリアル",
    "social.medium": "Medium",
    "social.medium.description": "Mediumで私の記事を読む",
    "social.gmail": "Gmail",
    "social.gmail.description": "私にメールを送る",

    // Confirmation dialog
    "confirm.redirect.title": "リダイレクトの確認",
    "confirm.redirect.message": "別のページにリダイレクトされます。続行しますか？",
    "confirm.redirect.cancel": "キャンセル",
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