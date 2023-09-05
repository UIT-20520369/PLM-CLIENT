import { FC, createContext } from "react";
import { useThemeMode } from "../hooks/useThemeMode";
import * as React from "react";

// export type ThemeModeContextType = {
//     themeMode: ThemeMode,
//     toggleTheme: () => void,
//     setThemeMode: (mode: ThemeMode) => void
// };

// export interface ThemeModeProviderProps {
//     children?: React.ReactNode;
// };

export const ThemeModeContext = createContext({
  themeMode: "light",
  toggleTheme: () => {},
  setThemeMode: (mode) => {},
});

const ThemeModeProvider = ({ children }) => {
  const [themeMode, toggleTheme, setThemeMode] = useThemeMode();

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleTheme, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
