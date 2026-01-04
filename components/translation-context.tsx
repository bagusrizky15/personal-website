"use client"

import { createContext, ReactNode, useContext } from "react"

export type Language = "en" | "id" | "ja" | "zh"

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
    "menu.apps": "Apps",
    
    // General
    "coming_soon": "Coming Soon",
    
    // Bio section
    "bio.title": "Hi, I'm Bagus!",
    "bio.description": "I'm a mobile developer. I also develop websites and automation using apps to simplify processes and increase productivity.",
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

    // Apps
    "app.convertwordtopdf.title": "Convert Word to PDF",
    "app.convertwordtopdf.description": "Tools for convert word to pdf.",
    "app.convert.upload.title": "Click to upload or drag and drop",
    "app.convert.upload.subtitle": "Word Documents (.doc, .docx)",
    "app.convert.select_file": "Select File",
    "app.convert.button": "Convert",
    "app.convert.download": "Download PDF",
    "app.convert.back": "Back",
    "app.convert.success": "Conversion Successful!",
    
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
    "menu.apps": "Apps",
    
    // General
    "coming_soon": "Coming Soon",
    
    // Bio section
    "bio.title": "Halo, Saya Bagus!",
    "bio.description": "Saya seorang Mobile Developer. Saya juga mengembangkan website dan automation menggunakan apps untuk menyederhanakan proses dan meningkatkan produktivitas.",
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
    
    // Apps
    "app.convertwordtopdf.title": "Konversi Word ke PDF",
    "app.convertwordtopdf.description": "Alat untuk mengonversi word ke pdf.",
    "app.convert.upload.title": "Klik untuk mengunggah atau seret dan lepas",
    "app.convert.upload.subtitle": "Dokumen Word (.doc, .docx)",
    "app.convert.select_file": "Pilih File",
    "app.convert.button": "Konversi",
    "app.convert.download": "Unduh PDF",
    "app.convert.back": "Kembali",
    "app.convert.success": "Konversi Berhasil!",

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
    "menu.apps": "Apps",

    // General
    "coming_soon": "近日公開",

    // Bio section
    "bio.title": "Hi, I'm Bagus!",
    "bio.description": "私はモバイル開発者です。また、プロセスを簡素化し生産性を向上させるために、appsを使用してウェブサイトや自動化も開発しています。",
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

    // Apps
    "app.convertwordtopdf.title": "WordをPDFに変換",
    "app.convertwordtopdf.description": "WordをPDFに変換するツール。",
    "app.convert.upload.title": "クリックしてアップロードまたはドラッグ＆ドロップ",
    "app.convert.upload.subtitle": "Wordドキュメント (.doc, .docx)",
    "app.convert.select_file": "ファイルを選択",
    "app.convert.button": "変換",
    "app.convert.download": "PDFをダウンロード",
    "app.convert.back": "戻る",
    "app.convert.success": "変換成功！",

    // Confirmation dialog
    "confirm.redirect.title": "リダイレクトの確認",
    "confirm.redirect.message": "別のページにリダイレクトされます。続行しますか？",
    "confirm.redirect.cancel": "キャンセル",
    "confirm.redirect.ok": "OK",
  },
  zh: {
    // Header
    "header.title": "M Bagus Rizky",
    "header.description": "Fullstack Developer | N8N Automation | Vibe Coding",

    // Menu items
    "menu.hi": "Hi",
    "menu.projects": "Projects",
    "menu.social_media": "Social Media",
    "menu.cv": "CV",
    "menu.apps": "Apps",

    // General
    "coming_soon": "即将推出",

    // Bio section
    "bio.title": "Hi, I'm Bagus!",
    "bio.description": "我是一名移动端开发者。我也使用apps开发网站和自动化流程，以简化流程并提高生产力。",
    "bio.description2": "我喜欢探索新事物，并在YouTube和Medium上创建内容。关注我的社交媒体，查看我创建的内容。",

    // Projects section
    "projects.title": "项目",
    "projects.description": "以下是我最近完成的一些项目。",

    // Social Media section
    "social.title": "与我联系",
    "social.description": "欢迎在任何平台上与我联系。",

    // Project cards
    "project.halo_bca.title": "Halo BCA",
    "project.halo_bca.description": "Halo BCA是为BCA客户和非客户提供的随时可访问的辅助及产品服务。",

    // Social media
    "social.github": "GitHub",
    "social.github.description": "查看其他代码仓库和项目作品集",
    "social.linkedin": "领英",
    "social.linkedin.description": "职业网络和职业动态",
    "social.youtube": "YouTube",
    "social.youtube.description": "应用开发及相关探索教程",
    "social.medium": "Medium",
    "social.medium.description": "阅读我在Medium上的文章",
    "social.gmail": "Gmail",
    "social.gmail.description": "给我发送邮件",

    // Apps
    "app.convertwordtopdf.title": "Word转PDF",
    "app.convertwordtopdf.description": "将Word转换为PDF的工具。",
    "app.convert.upload.title": "点击上传或拖放",
    "app.convert.upload.subtitle": "Word文档 (.doc, .docx)",
    "app.convert.select_file": "选择文件",
    "app.convert.button": "转换",
    "app.convert.download": "下载PDF",
    "app.convert.back": "返回",
    "app.convert.success": "转换成功！",

    // Confirmation dialog
    "confirm.redirect.title": "确认重定向",
    "confirm.redirect.message": "您将被重定向到另一个页面。是否继续？",
    "confirm.redirect.cancel": "取消",
    "confirm.redirect.ok": "确定",
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