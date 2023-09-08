import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

export const getDivider = (theme) => {
  const { palette } = theme;
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.outlineVariant.main,
        },
      },
    },
  };
};
