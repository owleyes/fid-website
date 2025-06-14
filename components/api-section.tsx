import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Terminal, ImageIcon, Shield, FileCheck } from "lucide-react"

export default function ApiSection() {
  const apiEndpoint = "https://api.fakedetector.com/v1/analyze"

  const apiExamples = {
    curl: `curl -X POST ${apiEndpoint} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "image=@/path/to/image.jpg" \\
  -F "models=all"`,

    node: `import fetch from 'node-fetch';
import FormData from 'form-data';
import fs from 'fs';

const apiKey = 'YOUR_API_KEY';
const imagePath = '/path/to/image.jpg';

const form = new FormData();
form.append('image', fs.createReadStream(imagePath));
form.append('models', 'all');

const response = await fetch('${apiEndpoint}', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`
  },
  body: form
});

const result = await response.json();
console.log(result);`,

    python: `import requests

api_key = 'YOUR_API_KEY'
image_path = '/path/to/image.jpg'

with open(image_path, 'rb') as image_file:
    files = {'image': image_file}
    data = {'models': 'all'}
    headers = {'Authorization': f'Bearer {api_key}'}
    
    response = requests.post(
        '${apiEndpoint}',
        headers=headers,
        files=files,
        data=data
    )

result = response.json()
print(result)`,
  }

  return (
    <section
      id="api-section"
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Terminal className="h-4 w-4 mr-2" />
            Developer API
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            API Integration
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Integrate our powerful fake image detection API into your applications with just a few lines of code. Get
            started in minutes with our comprehensive documentation.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-white/20 dark:border-slate-700/50 shadow-2xl shadow-slate-900/10">
          <CardHeader className="border-b border-slate-200 dark:border-slate-700">
            <CardTitle className="text-2xl font-bold">API Documentation</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400 mt-2">
              Use our RESTful API to detect fake images programmatically in your applications.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <Tabs defaultValue="curl">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-8">
                <TabsList className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                  <TabsTrigger value="curl" className="rounded-lg font-medium">
                    cURL
                  </TabsTrigger>
                  <TabsTrigger value="node" className="rounded-lg font-medium">
                    Node.js
                  </TabsTrigger>
                  <TabsTrigger value="python" className="rounded-lg font-medium">
                    Python
                  </TabsTrigger>
                </TabsList>

                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  Copy Code
                </Button>
              </div>

              {Object.entries(apiExamples).map(([key, code]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="relative group">
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-slate-700 to-slate-800 text-white px-4 py-2 text-xs font-mono rounded-bl-lg rounded-tr-lg">
                      {key === "curl" ? "bash" : key}
                    </div>
                    <pre className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl overflow-auto text-sm font-mono leading-relaxed shadow-2xl border border-slate-700">
                      <code>{code}</code>
                    </pre>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-12 space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                  <Terminal className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">API Parameters</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-blue-500 rounded-lg">
                        <ImageIcon className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white">image</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      The image file to analyze. Supports JPEG, PNG, WebP formats up to 10MB.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-purple-500 rounded-lg">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white">models</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Comma-separated list of detection models to use, or "all" for comprehensive analysis.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-800 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-emerald-500 rounded-lg">
                        <FileCheck className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white">detail_level</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Response detail level: "basic", "standard", or "full" for comprehensive metadata.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
