import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");

  const languages = [
    { value: "en", label: "English" },
    { value: "ta", label: "தமிழ்" },
    { value: "hi", label: "हिंदी" },
    { value: "te", label: "తెలుగు" },
  ];

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[140px] bg-card">
        <Globe className="h-4 w-4 mr-2" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
