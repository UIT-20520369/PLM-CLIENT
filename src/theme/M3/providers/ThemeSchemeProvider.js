import { createContext, FC, useLayoutEffect, useState } from "react";
import * as React from "react";
import { useTonalPalette } from "../hooks/useTonalPalette";
import { ThemeSchemeDefault } from "../types/ThemeScheme";
import { generateDesignTokens } from "../utils/generateTokens";
// export interface ThemeSchemeContextType {
//     generateScheme: (hexColor: string) => void;
//     themeScheme: ThemeScheme;
// };

// export interface ThemeSchemeProviderProps {
//     children?: React.ReactNode;
// };

export const ThemeSchemeContext = createContext({
  generateScheme: (hexColor) => {},
  themeScheme: ThemeSchemeDefault,
});

const ThemeSchemeProvider = ({ children }) => {
  const [tonalPalette, generatePalette] = useTonalPalette();
  const [themeScheme, setThemeScheme] = useState(ThemeSchemeDefault);

  useLayoutEffect(() => {
    const lightTokens = generateDesignTokens("light", tonalPalette);
    const darkTokens = generateDesignTokens("dark", tonalPalette);

    setThemeScheme({
      light: lightTokens,
      dark: darkTokens,
      tones: tonalPalette,
    });
  }, [tonalPalette]);

  const generateScheme = (hexColor) => {
    generatePalette(hexColor);
  };

  return (
    <ThemeSchemeContext.Provider value={{ generateScheme, themeScheme }}>
      {children}
    </ThemeSchemeContext.Provider>
  );
};

export default ThemeSchemeProvider;
