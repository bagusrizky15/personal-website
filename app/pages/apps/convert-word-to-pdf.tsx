"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/components/translation-context"
import { useState, useRef } from "react"
import { Upload, FileText, X, Loader2, Download, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { convertWordToPdf } from "@/app/pages/apps/conversion-service"

export function ConvertWordToPdf() {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isConverting, setIsConverting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.name.endsWith('.doc') || file.name.endsWith('.docx') ||
      file.type === 'application/msword' ||
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setFile(file)
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a Word document (.doc, .docx)",
        variant: "destructive",
      })
    }
  }

  const handleConvert = async () => {
    if (!file) return

    setIsConverting(true)
    setIsSuccess(false)
    setPdfBlob(null)
    setError(null)

    try {
      const blob = await convertWordToPdf({ file })
      setPdfBlob(blob)
      setIsSuccess(true)

      toast({
        title: "Conversion Complete",
        description: `${file.name} has been converted successfully.`,
      })
    } catch (error) {
      setError("Conversion Failed. Please try again")
    } finally {
      setIsConverting(false)
    }
  }

  const handleDownload = () => {
    if (!pdfBlob || !file) return

    const fileName =
      file.name.replace(/\.[^/.]+$/, "") + ".pdf"

    const url = window.URL.createObjectURL(pdfBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    toast({
      title: "Download Started",
      description: `Downloading ${fileName}`,
    })
  }


  const handleReset = () => {
    setFile(null)
    setIsSuccess(false)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-border rounded-xl p-6 bg-card relative"
    >
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">{t("app.convert.success")}</h3>
          <p className="text-muted-foreground mb-8 text-sm sm:text-base max-w-md truncate">
            {file?.name.replace(/\.[^/.]+$/, "")}.pdf
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={handleReset}
              className="px-6 py-2 border border-border rounded-md text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("app.convert.back")}
            </button>
            <button
              onClick={handleDownload}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              {t("app.convert.download")}
            </button>
          </div>
        </motion.div>
      ) : (
        <>
          <div
            className={`flex flex-col items-center justify-center gap-6 py-12 border-2 border-dashed rounded-lg transition-colors ${isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 bg-muted/30 hover:bg-muted/50"
              }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {file ? (
              <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-300">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
                <button
                  onClick={() => setFile(null)}
                  className="p-1 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <>
                <div className="p-4 rounded-full bg-background shadow-sm">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium">{t("app.convert.upload.title")}</p>
                  <p className="text-xs text-muted-foreground">{t("app.convert.upload.subtitle")}</p>
                </div>
                <button
                  onClick={triggerFileInput}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  {t("app.convert.select_file")}
                </button>
              </>
            )}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileSelect}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleConvert}
              disabled={!file || isConverting}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${!file || isConverting
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
            >
              {isConverting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Converting...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4" />
                  {t("app.convert.button")}
                </>
              )}
            </button>
          </div>
        </>
      )}

      {error && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border p-6 rounded-lg shadow-lg max-w-sm w-full mx-4 flex flex-col items-center text-center gap-4"
          >
            <div className="h-12 w-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Error</h3>
              <p className="text-muted-foreground text-sm">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="w-full py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              OK
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}
