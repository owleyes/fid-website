import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Shield, ImageIcon, FileCheck } from "lucide-react"

export default function UseCasesSection() {
  const useCases = [
    {
      title: "Insurance Fraud Prevention",
      description: "Detect fake car damage images submitted for auto insurance claims and reduce fraudulent payouts.",
      icon: Car,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      features: [
        "Identify manipulated damage photos",
        "Detect AI-enhanced severity in claims",
        "Reduce fraudulent payouts by 60%",
        "Real-time claim verification",
      ],
    },
    {
      title: "Content Moderation",
      description: "Filter out AI-generated images from user-submitted content on social platforms and marketplaces.",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
      borderColor: "border-purple-200 dark:border-purple-800",
      features: [
        "Prevent deepfakes and misleading content",
        "Label AI-generated images appropriately",
        "Maintain platform integrity",
        "Automated content filtering",
      ],
    },
    {
      title: "Media Verification",
      description: "Verify the authenticity of images used in news publications and combat misinformation.",
      icon: ImageIcon,
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
      borderColor: "border-amber-200 dark:border-amber-800",
      features: [
        "Combat misinformation in journalism",
        "Verify source material authenticity",
        "Build reader trust with verified content",
        "Newsroom integration tools",
      ],
    },
    {
      title: "Document Validation",
      description: "Validate the authenticity of document images for compliance and regulatory purposes.",
      icon: FileCheck,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      features: [
        "Verify ID documents and certificates",
        "Detect forged signatures and alterations",
        "Ensure regulatory compliance",
        "KYC process automation",
      ],
    },
  ]

  return (
    <section
      id="use-cases-section"
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 relative"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Real-World Applications
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Powerful Use Cases
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our fake image detection technology is trusted across industries to prevent fraud, maintain content
            integrity, and ensure authenticity at scale.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${useCase.bgColor} ${useCase.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${useCase.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <useCase.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {useCase.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.color} mr-3 flex-shrink-0`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
