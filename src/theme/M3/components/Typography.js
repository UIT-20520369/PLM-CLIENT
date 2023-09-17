import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

// declare module '@mui/material/Typography' {
//     interface TypoPropsColorOverrides {
//         onSurface: true;
//         onSurfaceVariant: true;
//         onBackground: true;
//         onPrimary: true;
//         onPrimaryContainer;
//         onSecondary: true;
//         onSecondaryContainer: true;
//         pay: true;
//         earn: true;
//     }
// }
export const getTypography = (theme) => {
  const { palette } = theme;
  return {
    MuiTypography: {
      variants: [
        {
          props: { color: "onSurface" },
          style: {
            color: palette.onSurface.main,
          },
        },
        {
          props: { color: "onSurfaceVariant" },
          style: {
            color: palette.onSurfaceVariant.main,
          },
        },
        {
          props: { color: "onBackground" },
          style: {
            color: palette.onBackground.main,
          },
        },
        {
          props: { color: "onPrimary" },
          style: {
            color: palette.onPrimary.main,
          },
        },
        {
          props: { color: "onPrimaryContainer" },
          style: {
            color: palette.onPrimaryContainer.main,
          },
        },
        {
          props: { color: "onSecondary" },
          style: {
            color: palette.onSecondary.main,
          },
        },
        {
          props: { color: "onSecondaryContainer" },
          style: {
            color: palette.onSecondaryContainer.main,
          },
        },
        {
          props: { color: "pay" },
          style: {
            color: palette.pay.main,
          },
        },
        {
          props: { color: "earn" },
          style: {
            color: palette.earn.main,
          },
        },
      ],
    },
  };
};
