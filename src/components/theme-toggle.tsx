"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch"; 

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2">
      <Moon className="w-5 h-5" />
      
      {/* Custom Switch Component */}
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="relative w-12 h-6 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300"
      >
        <span
          className={`block w-5 h-5 bg-white rounded-full transition-transform duration-300 transform ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </Switch>
      
      <Sun className="w-5 h-5" />
    </div>
  );
}
