"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type ThemeMode = "light" | "dark";
const THEME_STORAGE_KEY = "theme-mode";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    // Read from localStorage on mount
    const savedMode = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedMode === "light" || savedMode === "dark") {
      setMode(savedMode as ThemeMode);
    } else {
      // Default to system preference if no saved choice
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setMode(systemPrefersDark ? "dark" : "light");
    }
    setMounted(true);
  }, []);

  const applyTheme = (currentMode: ThemeMode) => {
    const root = document.documentElement;
    root.classList.toggle("dark", currentMode === "dark");
    root.style.colorScheme = currentMode;
  };

  useEffect(() => {
    if (mounted) {
      applyTheme(mode);
    }
  }, [mode, mounted]);

  // Sync with other tabs
  useEffect(() => {
    if (!mounted) return;

    const handleStorage = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY) {
        const newMode = e.newValue;
        if (newMode === "light" || newMode === "dark") {
          setMode(newMode as ThemeMode);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [mounted]);

  const toggleTheme = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    localStorage.setItem(THEME_STORAGE_KEY, nextMode);
    setMode(nextMode);
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled className="opacity-50">
        <Sun className="size-6 text-foreground" />
      </Button>
    );
  }

  const CurrentIcon = mode === "light" ? Sun : Moon;

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      <CurrentIcon className="size-6 text-foreground" />
    </Button>
  );
}
