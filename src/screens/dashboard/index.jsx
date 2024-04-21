import { useContext, useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Dashboard.css";
import MainPage from "./MainPage";
import Analytics from "./analytics/Analytics";
import AuditLogs from "./audit-logs/AuditLogs";
import ManageCities from "./manage-cities/ManageCities";
import ManageComplains from "./manage-complains/ManageComplains";
import ManageProperties from "./manage-properties/ManageProperties";
import ManageUsers from "./manage-users/ManageUsers";

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

          {activePage === "Manage Users" && <ManageUsers />}
          {activePage === "Manage Cities" && <ManageCities />}
          {activePage === "Manage Properties" && <ManageProperties />}

          {activePage === "Manage Complains" && <ManageComplains />}

          {activePage === "Audit Logs" && <AuditLogs />}
          <div style={{ marginBottom: 120 }}></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
