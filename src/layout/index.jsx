import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";

import "./styles.css";

const Layout = () => {
  const [isClicked, setIsClicked] = useState(true);
  const handleMenuClick = () => setIsClicked(!isClicked);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 960) {
        setIsClicked(false);
      } else {
        setIsClicked(true);
      }
    };

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
