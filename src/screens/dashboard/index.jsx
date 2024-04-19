import { useContext, useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Dashboard.css";
import MainPage from "./MainPage";
import Analytics from "./analytics/Analytics";
import AuditLogs from "./audit-logs/AuditLogs";
import Cities from "./cities/Cities";
import Complains from "./complains/Complains";
import Properties from "./properties/Properties";
import Users from "./users/Users";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  const { isOpen, activePage } = useContext(SidebarContext);

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
          {activePage === "Main Page" && <MainPage />}

          {activePage === "Analytics" && <Analytics />}

          {activePage === "Manage Users" && <Users />}
          {activePage === "Manage Cities" && <Cities />}
          {activePage === "Manage Properties" && <Properties />}

          {activePage === "Manage Complains" && <Complains />}

          {activePage === "Audit Logs" && <AuditLogs />}
          <div style={{ marginBottom: 120 }}></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
