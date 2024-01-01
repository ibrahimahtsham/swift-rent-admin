import { Outlet, redirect } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import { getCookie } from "../utils/helpers";

import "./styles.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

export function loader() {
  const isLoggedIn = getCookie("loggedIn");
  if (!isLoggedIn) return redirect("/");
  return null;
}
