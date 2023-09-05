import { useLayoutEffect, useState } from "react";

export const THEME_MODE_KEY = "ThemeModeKey";

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState("light");

  useLayoutEffect(() => {
    if (localStorage.getItem(THEME_MODE_KEY)) {
      const localMode = JSON.parse(
        localStorage.getItem(THEME_MODE_KEY) || "{}"
      );
      setThemeMode(localMode);
    }
  }, []);

  const toggleTheme = () => {
    const value = themeMode == "light" ? "dark" : "light";
    setThemeMode(value);
    localStorage.setItem(THEME_MODE_KEY, JSON.stringify(value));
  };

  return [themeMode, toggleTheme, setThemeMode];
};
