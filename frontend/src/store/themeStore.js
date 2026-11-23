import { create } from "zustand";

const THEME_STORAGE_KEY = "vims_theme";

// Initialize theme from localStorage or default to "light"
const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    // Check system preference if user hasn't explicitly set one
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  } catch {
    // fallback
  }
  return "light";
};

// Apply class to <html> element
const applyThemeToDocument = (theme) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
    root.style.colorScheme = "light";
  }
};

// Apply on initial script evaluation
if (typeof window !== "undefined") {
  const init = getInitialTheme();
  applyThemeToDocument(init);
}

export const useThemeStore = create((set, get) => ({
  theme: getInitialTheme(),

  toggleTheme: () => {
    const current = get().theme;
    const next = current === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // storage error
    }
    applyThemeToDocument(next);
    set({ theme: next });
  },

  setTheme: (newTheme) => {
    if (newTheme !== "light" && newTheme !== "dark") return;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // storage error
    }
    applyThemeToDocument(newTheme);
    set({ theme: newTheme });
  },
}));

export default useThemeStore;
