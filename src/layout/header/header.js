import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import DefaultAvatar from "./default-avatar.JPG";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import * as React from "react";
import "./header.css";

function Header({ title }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2" color="onBackground" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <div className="personal" onClick={handleClick}>
          <Avatar src={DefaultAvatar} />
          <Typography variant="body">Phuong Dong</Typography>
          <ArrowIcon />
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
      <Divider
        variant="middle"
        sx={{ marginLeft: "24px", marginRight: "24px" }}
      />
    </AppBar>
  );
}

export default Header;
