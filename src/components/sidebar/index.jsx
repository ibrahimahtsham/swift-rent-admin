import { useContext, useState } from "react";
import { icons } from "../../utils/ImageImports";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Sidebar.css";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isOpen } = useContext(SidebarContext);

  const [activeButton, setActiveButton] = useState("");

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"} ${theme}`}>
      <div className="menus-container">
        <SidebarButton
          image={icons.usersIcon}
          title="Manage Users"
          isActive={activeButton === "Manage Users"}
          onClick={() => setActiveButton("Manage Users")}
        />
        <SidebarButton
          image={icons.propertiesIcon}
          title="Manage Properties"
          isActive={activeButton === "Manage Properties"}
          onClick={() => setActiveButton("Manage Properties")}
        />
        <SidebarButton
          image={icons.analytics}
          title="Analytics"
          isActive={activeButton === "Analytics"}
          onClick={() => setActiveButton("Analytics")}
        />
        <SidebarButton
          image={icons.complains}
          title="Manage Complains"
          isActive={activeButton === "Manage Complains"}
          onClick={() => setActiveButton("Manage Complains")}
        />
        <SidebarButton
          image={icons.auditIcon}
          title="Audit Logs"
          isActive={activeButton === "Audit Logs"}
          onClick={() => setActiveButton("Audit Logs")}
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
