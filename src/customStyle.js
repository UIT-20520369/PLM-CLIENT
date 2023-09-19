import { useContext, useMemo } from "react";
import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { getMUIComponents } from "./theme/M3/utils/getMUIComponents";
import { getMUIPalette } from "./theme/M3/utils/getMUIPalette";
import { ThemeModeContext } from "./theme/M3/providers/ThemeModeProvider";
import { ThemeSchemeContext } from "./theme/M3/providers/ThemeSchemeProvider";

import {
  StateLayer,
  getStateLayerColor,
} from "./theme/M3/utils/getStayeLayerColor";

function GenerateCSSColor() {
  const { themeMode } = useContext(ThemeModeContext);
  const { themeScheme } = useContext(ThemeSchemeContext);

  const m3Theme = useMemo(() => {
    const muiPalette = getMUIPalette(themeMode, themeScheme);
    console.log(muiPalette);
    let theme = createTheme(muiPalette);
    theme = deepmerge(theme, getMUIComponents(theme));
    console.log(theme);
    return theme;
  }, [themeMode, themeScheme]);

  document.documentElement.style.setProperty(
    "--surface-main-color",
    m3Theme.palette.surface.main
  );
  document.documentElement.style.setProperty(
    "--on-surface-main-color",
    m3Theme.palette.onSurface.main
  );

  document.documentElement.style.setProperty(
    "--hover-on-surface",
    getStateLayerColor(
      StateLayer.Hover,
      m3Theme.palette.surfaceContainerLow.main,
      m3Theme.palette.onSurface.main
    )
  );

  return <div></div>;
}

export default GenerateCSSColor;
