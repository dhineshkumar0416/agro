import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Leaf, CheckCircle, BookOpen } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Home = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Leaf Image",
      description: "Take or upload a clear photo of your plant's leaf",
    },
    {
      icon: Leaf,
      title: "AI Analysis",
      description: "Our AI instantly analyzes the leaf for disease symptoms",
    },
    {
      icon: CheckCircle,
      title: "Get Remedies",
      description: "Receive disease info and treatment recommendations",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/20 py-20 md:py-32">
        <div className="container relative z-10 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Leaf className="h-4 w-4" />
              AI-Powered Plant Health Detection
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              🌿 AI Plant Disease
              <span className="block bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Detection System
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload a leaf image and instantly detect plant diseases with remedies. 
              Empowering farmers with smart agriculture technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/upload">
                <Button size="lg" className="shadow-agro-md hover:shadow-agro-lg transition-shadow">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Leaf Image
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to protect your crops
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-agro-md animate-scale-in">
                  <CardContent className="pt-12 pb-8 text-center">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5">
                      {index + 1}
                    </div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-agro-lg">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">About the Project</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Smart Agro Vision is an AI-powered platform designed to help farmers identify plant diseases quickly and accurately. Using advanced machine learning models, our system analyzes leaf images to detect various plant diseases.
                  </p>
                  <p>
                    Once a disease is detected, the system provides detailed information about the condition and recommends effective remedies. This helps farmers take timely action to protect their crops and improve yield.
                  </p>
                  <p className="text-foreground font-medium">
                    Our mission: Making plant healthcare accessible to every farmer, everywhere. 🌱
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
