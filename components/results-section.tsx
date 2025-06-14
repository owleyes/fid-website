import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, Info, ImageIcon } from "lucide-react"

export default function ResultsSection() {
  return (
    <section
      id="results-section"
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium mb-6">
            <AlertCircle className="h-4 w-4 mr-2" />
            Awaiting Analysis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Analysis Results
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Upload an image above to see detailed detection results, confidence scores, and watermark analysis here.
          </p>
          <div className="mt-12 p-8 rounded-2xl bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-2xl flex items-center justify-center">
              <ImageIcon className="h-8 w-8 text-slate-500 dark:text-slate-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400">Results will appear here</p>
          </div>
        </div>

        {/* Example Results Preview */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm text-slate-500 dark:text-slate-400">Example Analysis Results</p>
          </div>

          <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-white/20 dark:border-slate-700/50 shadow-2xl shadow-slate-900/10">
            <CardHeader className="pb-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <CardTitle className="text-2xl font-bold">Detection Analysis</CardTitle>
                <div className="flex flex-wrap items-center gap-4">
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-4 font-semibold">
                    🤖 AI-Generated
                  </Badge>
                  <span className="text-sm font-semibold text-red-600 dark:text-red-500">High Confidence</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Model 1 */}
                <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold">DeepDetect v3</CardTitle>
                      <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Fake Probability</span>
                        <span className="text-lg font-bold text-slate-900 dark:text-white">94.0%</span>
                      </div>
                      <Progress value={94} className="h-3" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Confidence:</span>
                        <span className="font-semibold text-red-600 dark:text-red-500">HIGH</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Watermark:</span>
                        <Badge
                          variant="outline"
                          className="font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                        >
                          Midjourney
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Model 2 */}
                <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold">FakeSpotter Pro</CardTitle>
                      <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Fake Probability</span>
                        <span className="text-lg font-bold text-slate-900 dark:text-white">89.0%</span>
                      </div>
                      <Progress value={89} className="h-3" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Confidence:</span>
                        <span className="font-semibold text-red-600 dark:text-red-500">HIGH</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Watermark:</span>
                        <Badge
                          variant="outline"
                          className="font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                        >
                          Midjourney
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Model 3 */}
                <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold">ImageVerify AI</CardTitle>
                      <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                        <Info className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Fake Probability</span>
                        <span className="text-lg font-bold text-slate-900 dark:text-white">78.0%</span>
                      </div>
                      <Progress value={78} className="h-3" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Confidence:</span>
                        <span className="font-semibold text-amber-600 dark:text-amber-500">MEDIUM</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Watermark:</span>
                        <span className="text-slate-500 dark:text-slate-400">None Detected</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
