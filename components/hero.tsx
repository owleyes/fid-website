import { ArrowRight, Shield, Zap, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 py-24 flex flex-col items-center text-center min-h-screen justify-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mb-8">
          <Shield className="h-4 w-4 text-emerald-400 mr-2" />
          <span className="text-sm font-medium text-emerald-300">Advanced AI Detection Technology</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent leading-tight">
          Detect Fake Images
          <br />
          <span className="text-emerald-400">with Confidence</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mb-12 leading-relaxed">
          Our platform uses three leading AI detection models to identify synthetic images with
          <span className="text-emerald-400 font-semibold"> 94% accuracy</span>. Perfect for insurance claims, content
          moderation, and media verification.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Zap className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">Lightning Fast</span>
          </div>
          <div className="flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Eye className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium">Watermark Detection</span>
          </div>
          <div className="flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Shield className="h-4 w-4 text-emerald-400 mr-2" />
            <span className="text-sm font-medium">Enterprise Ready</span>
          </div>
        </div>

        <Button
          size="lg"
          className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
        >
          Try Detection Now
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">94%</div>
            <div className="text-sm text-slate-400">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">3</div>
            <div className="text-sm text-slate-400">AI Models</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2s</div>
            <div className="text-sm text-slate-400">Analysis Time</div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950"></div>
    </div>
  )
}
