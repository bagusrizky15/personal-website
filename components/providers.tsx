 "use client"
 
 import { ThemeProvider } from "@/components/theme-provider"
 import { Language, TranslationProvider } from "@/components/translation-context"
 import { useState } from "react"
 
 export function Providers({ children }: { children: React.ReactNode }) {
   const [language, setLanguage] = useState<Language>("en")
 
   return (
     <TranslationProvider language={language} setLanguage={setLanguage}>
       <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
       >
         {children}
       </ThemeProvider>
     </TranslationProvider>
   )
 }