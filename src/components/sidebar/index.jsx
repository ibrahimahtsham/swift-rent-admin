import { useContext } from "react";
import { icons } from "../../utils/ImageImports";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Sidebar.css";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isOpen, setActivePage, activePage } = useContext(SidebarContext);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"} ${theme}`}>
      <div className="menus-container">
        <SidebarButton
          image={icons.usersIcon}
          title="Manage Users"
          isActive={activePage === "Manage Users"}
          onClick={() => setActivePage("Manage Users")}
        />
        <SidebarButton
          image={icons.propertiesIcon}
          title="Manage Properties"
          isActive={activePage === "Manage Properties"}
          onClick={() => setActivePage("Manage Properties")}
        />
        <SidebarButton
          image={icons.analytics}
          title="Analytics"
          isActive={activePage === "Analytics"}
          onClick={() => setActivePage("Analytics")}
        />
        <SidebarButton
          image={icons.complains}
          title="Manage Complains"
          isActive={activePage === "Manage Complains"}
          onClick={() => setActivePage("Manage Complains")}
        />
        <SidebarButton
          image={icons.auditIcon}
          title="Audit Logs"
          isActive={activePage === "Audit Logs"}
          onClick={() => setActivePage("Audit Logs")}
        />
      </div>
      <div className="copyright-container">
        <img
          style={{ width: isOpen ? "" : "30px" }}
          className="copyright-logo"
          src={icons.swiftRentLogoWhiteSVG}
          alt="swift rent logo"
        />

        <p style={{ fontSize: isOpen ? "initial" : 8 }}>
          {isOpen ? "Copyright " : ""} &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
