import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

// interface M3AppBar {
//     MuiAppBar: {
//         defaultProps?: ComponentsProps['MuiAppBar'];
//         styleOverrides?: ComponentsOverrides<Theme>['MuiAppBar'];
//         variants?: ComponentsVariants['MuiAppBar'];
//     }
// }

export const getAppBar = (theme) => {
  const { palette } = theme;
  return {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: "default",
      },
      styleOverrides: {
        colorDefault: {
          background: palette.background.default,
          color: palette.onBackground.main,
        },
        colorPrimary: {
          background: palette.surface.main,
          color: palette.onSurface.main,
        },
      },
    },
  };
};
