import Hero from "@/components/hero"
import UploadSection from "@/components/upload-section"
import ResultsSection from "@/components/results-section"
import ApiSection from "@/components/api-section"
import UseCasesSection from "@/components/use-cases-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <UploadSection />
        <ResultsSection />
        <ApiSection />
        <UseCasesSection />
      </div>
    </main>
  )
}
