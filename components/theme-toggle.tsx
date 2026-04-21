"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type ThemeMode = "light" | "dark" | "system";
const THEME_STORAGE_KEY = "theme-mode";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    // Read from localStorage on mount
    const savedMode = localStorage.getItem(THEME_STORAGE_KEY);
    if (
      savedMode === "light" ||
      savedMode === "dark" ||
      savedMode === "system"
    ) {
      setMode(savedMode);
    }
    setMounted(true);
  }, []);

  const applyTheme = (currentMode: ThemeMode) => {
    const root = document.documentElement;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const resolvedTheme =
      currentMode === "system"
        ? systemPrefersDark
          ? "dark"
          : "light"
        : currentMode;

    root.classList.toggle("dark", resolvedTheme === "dark");
    root.style.colorScheme = resolvedTheme;
  };

  useEffect(() => {
    if (mounted) {
      applyTheme(mode);
    }
  }, [mode, mounted]);

  // Listen for system theme changes if mode is "system"
  useEffect(() => {
    if (!mounted || mode !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode, mounted]);

  // Sync with other tabs
  useEffect(() => {
    if (!mounted) return;

    const handleStorage = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY) {
        const newMode = e.newValue;
        if (newMode === "light" || newMode === "dark" || newMode === "system") {
          setMode(newMode);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [mounted]);

  const cycleThemeMode = () => {
    const nextMode =
      mode === "light" ? "dark" : mode === "dark" ? "system" : "light";
    localStorage.setItem(THEME_STORAGE_KEY, nextMode);
    setMode(nextMode);
  };

  // Provide a fallback to avoid layout shift before hydration
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon-sm" disabled className="opacity-50">
        <Monitor className="size-4" />
      </Button>
    );
  }

  const CurrentIcon = mode === "light" ? Sun : mode === "dark" ? Moon : Monitor;
  const nextLabel =
    mode === "light" ? "dark" : mode === "dark" ? "system" : "light";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={cycleThemeMode}
      aria-label={`Current theme: ${mode}. Switch to ${nextLabel}`}
      title={`Theme: ${mode} (click for ${nextLabel})`}
    >
      <CurrentIcon className="text-foreground" />
    </Button>
  );
}
