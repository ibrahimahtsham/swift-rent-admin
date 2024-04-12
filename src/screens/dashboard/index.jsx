import { useContext, useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import "./styles/Dashboard.css";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  const { isOpen } = useContext(SidebarContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar />
      <div className="sidebar-and-content-container">
        <Sidebar />
        <div
          className={`dashboard-content-container ${theme} ${
            isOpen ? "shrink" : "grow"
          }`}
        >
          <h1>Dashboard1</h1>
          <h1>Dashboard2</h1>
          <h1>Dashboard3</h1>
          <h1>Dashboard4</h1>
          <h1>Dashboard5</h1>
          <h1>Dashboard6</h1>
          <h1>Dashboard7</h1>
          <h1>Dashboard8</h1>
          <h1>Dashboard9</h1>
          <h1>Dashboard10</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
