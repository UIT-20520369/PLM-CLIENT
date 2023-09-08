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

export const getDivider = (theme) => {
  const { palette } = theme;
  console.log(palette);
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
