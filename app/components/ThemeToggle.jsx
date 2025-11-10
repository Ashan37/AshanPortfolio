"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/50 transition-all duration-300"
        aria-label="Toggle theme"
      >
        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/50 hover:scale-110 hover:shadow-lg transition-all duration-300 bg-white dark:bg-darkTheme"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <Image
        src={isDark ? assets.sun_icon : assets.moon_icon}
        alt="Toggle theme"
        width={20}
        height={20}
        className="transition-transform duration-300"
      />
    </button>
  );
}
