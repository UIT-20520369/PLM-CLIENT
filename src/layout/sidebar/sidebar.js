import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import TransactionsIcon from "@mui/icons-material/SyncAltOutlined";
import WalletsIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import GroupsIcon from "@mui/icons-material/GroupsOutlined";
import LoansIcon from "@mui/icons-material/CreditScoreOutlined";
import StatisticsIcon from "@mui/icons-material/InsertChartOutlined";
import ProfileIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import List from "@mui/material/List";

import "./sidebar";

const drawerWidth = 256;
const iconComponents = {
  Home: HomeIcon,
  Transactions: TransactionsIcon,
  Wallets: WalletsIcon,
  Groups: GroupsIcon,
  Loans: LoansIcon,
  Statistics: StatisticsIcon,
  Profile: ProfileIcon,
  Settings: SettingsIcon,
};
function Icon(name) {
  const IconComponent = iconComponents[name];
  console.log(<IconComponent />);
  return <IconComponent />;
}
function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          height: "100%",
        },
      }}
      variant="permanent"
      anchor="left"
      PaperProps={{
        height: "100%",
        position: "relative",
      }}
    >
      <Toolbar />
      <List>
        {[
          "Home",
          "Transactions",
          "Wallets",
          "Groups",
          "Loans",
          "Statistics",
        ].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>{Icon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List
        sx={{
          position: "absolute",
          bottom: 0,
        }}
      >
        {["Profile", "Settings"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>{Icon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
