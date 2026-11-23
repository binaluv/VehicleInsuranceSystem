import React from "react";
import { Sun, Moon } from "lucide-react";
import useThemeStore from "../store/themeStore";

export default function ThemeToggle({ className = "", showLabel = false, size = "md" }) {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";

  const sizeClasses = {
    sm: "p-1.5 text-xs",
    md: "p-2 text-sm",
    lg: "p-2.5 text-base",
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative inline-flex items-center gap-2 rounded-xl transition-all duration-200 cursor-pointer select-none font-semibold ${sizeClasses[size] || sizeClasses.md} ${
        isDark
          ? "bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 shadow-sm"
          : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-sm"
      } ${className}`}
    >
      <div className="relative flex items-center justify-center">
        {isDark ? (
          <Sun className={`${iconSizes[size] || iconSizes.md} animate-spin-slow text-amber-400`} />
        ) : (
          <Moon className={`${iconSizes[size] || iconSizes.md} text-slate-700`} />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-semibold whitespace-nowrap">
          {isDark ? "Light View" : "Dark View"}
        </span>
      )}
    </button>
  );
}
