import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";
import { StateLayer, getStateLayerColor } from "../utils/getStayeLayerColor";

// declare module '@mui/material/Chip' {
//     interface ChipPropsColorOverrides {
//         onSurface: true,
//         selected: true,
//     }
// }
export const getChip = (theme) => {
  const { palette } = theme;
  return {
    MuiChip: {
      variants: [
        {
          //unselected chip
          props: { color: "surface", variant: "outlined" },
          style: {
            color: palette.onSurface.main,
            backgroundColor: palette.surfaceContainerLow.main,
            borderColor: palette.outline.main,
            borderRadius: "8px",
            "&:hover": {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainerLow.main,
                palette.onSurface.main
              ),
            },
          },
        },
        {
          //selected chip
          props: { color: "secondaryContainer", variant: "filled" },
          style: {
            color: palette.onSecondaryContainer.main,
            backgroundColor: palette.secondaryContainer.main,
            borderRadius: "8px",
            "&:hover": {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main
              ),
              boxShadow: theme.shadows[1],
            },
          },
        },
      ],
    },
  };
};
