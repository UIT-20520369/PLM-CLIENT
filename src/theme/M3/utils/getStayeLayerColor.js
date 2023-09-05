import {
  Blend,
  argbFromHex,
  hexFromArgb,
} from "@material/material-color-utilities";
export const StateLayer = {
  Hover: 0.08,
  Focus: 0.12,
  Press: 0.12,
  Drag: 0.16,
};

export const getStateLayerColor = (state, containerColor, contentColor) => {
  return hexFromArgb(
    Blend.cam16Ucs(
      argbFromHex(containerColor),
      argbFromHex(contentColor),
      state
    )
  );
};
