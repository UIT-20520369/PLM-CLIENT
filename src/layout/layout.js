import "./layout.css";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const pageTitle = {
  transactions: "Transactions",
  login: "Profile",
};

function extractLocation(inputString) {
  // Use a regular expression to find the first substring between "/" or prefixed by "/"
  const match = inputString.match(/\/([^/]+)/);

  // Check if a match was found
  if (match && match[1]) {
    return match[1]; // Return the matched substring
  } else {
    return null; // Return null if no match is found
  }
}

function Layout() {
  const path = useLocation().pathname;
  const location = extractLocation(path);
  const title = location != null ? pageTitle[location] : "Home";
  return (
    <div className="App">
      <div className="left">
        <Sidebar title={title}></Sidebar>
      </div>
      <div className="right">
        <Header title={title}></Header>
        <div className="page">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Layout;
