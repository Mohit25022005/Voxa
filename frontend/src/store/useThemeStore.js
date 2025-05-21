import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "light",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
  initTheme: () => {
    const storedTheme = localStorage.getItem("chat-theme");
    if (storedTheme) {
      set({ theme: storedTheme });
    }
  },
}));
