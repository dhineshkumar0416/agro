import { Sprout } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-8 mt-20">
      <div className="container flex flex-col items-center justify-center gap-2 text-center">
        <div className="flex items-center gap-2">
          <Sprout className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground">Smart Agro Vision</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2024 Smart Agro Vision | Empowering Farmers with AI 🌾
        </p>
      </div>
    </footer>
  );
};
