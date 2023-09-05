import "./layout.css";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="App">
      <div className="left">
        <Sidebar></Sidebar>
      </div>
      <div className="right">
        <Header></Header>
        <div className="page">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Layout;
