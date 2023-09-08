import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";

function Header({ title }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      <Divider
        variant="middle"
        sx={{ marginLeft: "24px", marginRight: "24px" }}
      />
    </AppBar>
  );
}

export default Header;
