import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link as LinkIcon, Copy, ArrowRight, Loader2, Check, ExternalLink, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react"
import { useTranslation } from "@/components/translation-context"
import { useToast } from "@/hooks/use-toast"
import { shortenUrl } from './short-url.service';

export const ShortUrlGenerator: React.FC = () => {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [inputUrl, setInputUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleShortenClick = async () => {
    if (!inputUrl) return;

    setIsLoading(true);
    setShortenedUrl(''); 
    setIsCopied(false);
    setError(null);
    setIsSuccess(false);

    try {
      const result = await shortenUrl(inputUrl);
      setShortenedUrl(result.shortUrl);
      setIsSuccess(true);
    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setIsCopied(true);
    toast({
      title: "Copied!",
      description: "Short URL copied to clipboard",
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setInputUrl('');
    setShortenedUrl('');
    setIsSuccess(false);
    setIsCopied(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-border rounded-xl p-6 bg-card relative max-w-2xl mx-auto"
    >
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-8 text-center"
        >
          <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-6">URL Shortened Successfully!</h3>
          
          <div className="w-full bg-muted/50 p-4 rounded-lg mb-8 border">
            <p className="text-sm font-medium text-muted-foreground mb-2 text-left">
              {t("app.shorturl.result")}
            </p>
            <div className="flex items-center gap-2 bg-background rounded-md border p-2">
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-sm text-primary hover:underline truncate flex items-center gap-2"
              >
                <ExternalLink className="h-3 w-3" />
                {shortenedUrl}
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted h-8 w-8"
                title={t("app.shorturl.copy")}
              >
                {isCopied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="px-6 py-2 border border-border rounded-md text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Shorten Another
          </button>
        </motion.div>
      ) : (
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {t("app.shorturl.placeholder")}
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="url"
                placeholder="Paste here"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <button
              onClick={handleShortenClick}
              disabled={isLoading || !inputUrl}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  {t("app.shorturl.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
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
  );
};