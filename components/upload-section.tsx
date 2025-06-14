"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, ImageIcon, X, Loader2, Shield, Zap, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { analyzeImage } from "@/lib/actions"

export default function UploadSection() {
  const [image, setImage] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const files = e.dataTransfer?.files
    if (files && files[0]) {
      handleFile(files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files
    if (files && files[0]) {
      handleFile(files[0])
    }
  }

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type || !file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)
    setFileName(file.name || "Unknown file")

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result
      if (result && typeof result === "string") {
        setImage(result)
        setIsUploading(false)
      }
    }
    reader.onerror = () => {
      setIsUploading(false)
      toast({
        title: "Error reading file",
        description: "There was an error reading your file. Please try again.",
        variant: "destructive",
      })
    }
    reader.readAsDataURL(file)
  }

  const resetUpload = () => {
    setImage(null)
    setFileName(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleAnalyze = async () => {
    if (!image) return

    setIsAnalyzing(true)
    try {
      // Call the server action to analyze the image
      await analyzeImage(image)

      // Dispatch custom event to show results
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("showAnalysisResults"))
      }

      // Scroll to results section
      const resultsSection = document.getElementById("results-section")
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth" })
      }

      toast({
        title: "Analysis complete",
        description: "View the detailed results below",
      })
    } catch (error) {
      console.error("Analysis error:", error)
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your image. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <section id="upload-section" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <Upload className="h-4 w-4 mr-2" />
            Upload & Analyze
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Upload Your Image
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Upload any image to check if it's AI-generated. Our advanced system analyzes it through three leading
            detection models and provides detailed insights in seconds.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-white/20 dark:border-slate-700/50 shadow-2xl shadow-slate-900/10">
          <CardContent className="p-8">
            {!image ? (
              <div
                className="border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer transition-all duration-300 border-slate-300 dark:border-slate-600 hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 hover:shadow-lg hover:shadow-emerald-500/10 bg-gradient-to-br from-slate-50/50 to-white/50 dark:from-slate-800/50 dark:to-slate-900/50"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleUploadClick}
              >
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg">
                      <Upload className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">AI</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-slate-900 dark:text-white">
                      Drag and drop your image here
                    </p>
                    <p className="text-slate-500 dark:text-slate-400">
                      or click to browse • Supports JPEG, PNG, WebP • Max 10MB
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-1 text-emerald-500" />
                      Secure
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 mr-1 text-yellow-500" />
                      Fast
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1 text-blue-500" />
                      Accurate
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 px-6 py-3 font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300">
                    Select Image
                  </Button>
                </div>
                <input type="file" className="hidden" accept="image/*" ref={fileInputRef} onChange={handleFileChange} />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="relative group">
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm z-10 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors"
                    onClick={resetUpload}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-lg">
                    <img
                      src={image || "/placeholder.svg"}
                      alt="Uploaded image"
                      className="w-full h-auto max-h-[500px] object-contain bg-slate-50 dark:bg-slate-800"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <ImageIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-medium truncate max-w-[300px]">{fileName}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Ready for analysis</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 px-6 py-3 font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Shield className="mr-2 h-4 w-4" />
                        Analyze Image
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
