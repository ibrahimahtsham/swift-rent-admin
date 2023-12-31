import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";

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
