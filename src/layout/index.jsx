import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";

import "./styles.css";

const Layout = () => {
  const [isClicked, setIsClicked] = useState(true); // seting sidebar open by default
  const handleMenuClick = () => setIsClicked(!isClicked); // toggle switch to open and close sidebar

  // if screen is smaller then automatically close the sidebar
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 960) {
        setIsClicked(false);
      } else {
        setIsClicked(true);
      }
    };

    // check screen size to toggle sidebar
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <Navbar handleMenuClick={handleMenuClick} />
      <div className="main-container">
        <Sidebar isClicked={isClicked} />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
