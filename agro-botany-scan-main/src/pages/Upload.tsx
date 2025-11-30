import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload as UploadIcon, Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    disease: string;
    confidence: number;
    remedies: string[];
  } | null>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      analyzeImage();
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    setResult(null);

    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        disease: "Early Blight",
        confidence: 92.5,
        remedies: [
          "Remove and destroy infected plant parts immediately",
          "Apply copper-based fungicide every 7-10 days",
          "Ensure proper spacing between plants for air circulation",
          "Water plants at the base to avoid wetting foliage",
          "Rotate crops annually to prevent disease buildup",
        ],
      });
      toast({
        title: "Analysis Complete!",
        description: "Disease detected with high confidence.",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container py-8 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Upload Leaf Image</h1>
            <p className="text-muted-foreground">
              Upload a clear photo of your plant's leaf for AI disease detection
            </p>
          </div>

          {/* Upload Section */}
          <Card className="border-2 border-dashed hover:border-primary/50 transition-colors mb-8 shadow-agro-md">
            <CardContent className="pt-12 pb-12">
              <label htmlFor="file-upload" className="cursor-pointer block">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="p-6 rounded-full bg-primary/10">
                    <UploadIcon className="h-12 w-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-1">
                      Drop your leaf image here or click to browse
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports: JPG, PNG (Max 5MB)
                    </p>
                  </div>
                  <Button type="button" size="lg">
                    Select Image
                  </Button>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </label>
            </CardContent>
          </Card>

          {/* Analysis Status */}
          {isAnalyzing && (
            <Card className="border-2 border-primary/30 bg-primary/5 mb-8 animate-scale-in">
              <CardContent className="py-8">
                <div className="flex flex-col items-center gap-4 text-center">
                  <Loader2 className="h-12 w-12 text-primary animate-spin" />
                  <div>
                    <p className="text-lg font-semibold text-primary mb-1">
                      Analyzing your leaf... 🌱
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Please wait while our AI examines the image
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Results */}
          {result && !isAnalyzing && (
            <Card className="border-2 shadow-agro-lg animate-scale-in">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b">
                  <div className="p-3 rounded-full bg-success/10">
                    <CheckCircle2 className="h-8 w-8 text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{result.disease}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Confidence:</span>
                      <span className="text-lg font-semibold text-primary">
                        {result.confidence}%
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    💊 Recommended Remedies
                  </h4>
                  <ul className="space-y-3">
                    {result.remedies.map((remedy, index) => (
                      <li
                        key={index}
                        className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm leading-relaxed">{remedy}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button onClick={() => setResult(null)} variant="outline" className="w-full">
                    Analyze Another Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Upload;
