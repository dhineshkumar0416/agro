import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, History, BookOpen, Leaf, AlertTriangle, CheckCircle, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Uploads",
      value: "0",
      icon: Upload,
      color: "text-info",
    },
    {
      title: "Healthy Plants",
      value: "0",
      icon: CheckCircle,
      color: "text-success",
    },
    {
      title: "Detected Diseases",
      value: "0",
      icon: AlertTriangle,
      color: "text-warning",
    },
    {
      title: "Active Remedies",
      value: "0",
      icon: Activity,
      color: "text-primary",
    },
  ];

  const topDiseases = [
    { name: "No data yet", count: 0 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container py-8 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Monitor your plant health analytics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-agro-md transition-shadow animate-scale-in">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 border-2 shadow-agro-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/upload" className="block">
                <Button variant="outline" className="w-full h-20 flex-col gap-2 hover:bg-primary/5 hover:border-primary transition-colors">
                  <Upload className="h-5 w-5" />
                  Upload Leaf
                </Button>
              </Link>
              <Button variant="outline" className="w-full h-20 flex-col gap-2 hover:bg-primary/5 hover:border-primary transition-colors">
                <History className="h-5 w-5" />
                View History
              </Button>
              <Button variant="outline" className="w-full h-20 flex-col gap-2 hover:bg-primary/5 hover:border-primary transition-colors">
                <BookOpen className="h-5 w-5" />
                Learn Remedies
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Top Diseases Chart */}
        <Card className="border-2 shadow-agro-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Top 3 Detected Diseases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDiseases.map((disease, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      {index + 1}
                    </span>
                    <span className="font-medium">{disease.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{disease.count} cases</span>
                </div>
              ))}
              <p className="text-sm text-muted-foreground text-center pt-4">
                Upload leaf images to see disease statistics
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
