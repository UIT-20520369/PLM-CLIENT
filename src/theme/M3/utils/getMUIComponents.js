import { Theme } from "@mui/material";
import {
  getAccordion,
  getAlert,
  getAppBar,
  getBadge,
  getButton,
  getCard,
  getCssBaseline,
  getDrawer,
  getFab,
  getListItem,
  getListItemButton,
  getListItemIcon,
  getMenu,
  getSwitch,
  getToggleButton,
  getToggleButtonGroup,
  getTooltip,
  getDivider,
} from "../components";

export const getMUIComponents = (theme) => {
  //const { palette } = theme;
  return {
    components: {
      ...getCssBaseline(theme),
      ...getAccordion(theme),
      ...getAlert(theme),
      ...getAppBar(theme),
      ...getBadge(theme),
      ...getButton(theme),
      ...getCard(theme),
      ...getDrawer(theme),
      ...getFab(theme),
      ...getListItem(theme),
      ...getListItemButton(theme),
      ...getListItemIcon(theme),
      ...getMenu(theme),
      ...getSwitch(theme),
      ...getToggleButton(theme),
      ...getToggleButtonGroup(theme),
      ...getTooltip(theme),
      ...getDivider(theme),
    },
  };
};
