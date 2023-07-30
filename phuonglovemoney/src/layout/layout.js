import "./layout.css";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

function Layout() {
  return (
    <div className="page">
      <div className="left"><Sidebar></Sidebar></div>

      <div className="right"><Header></Header></div>
    </div>
  );
}

export default Layout;
