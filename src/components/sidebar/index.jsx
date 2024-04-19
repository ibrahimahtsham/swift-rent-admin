import { useContext } from "react";
import { icons } from "../../utils/ImageImports";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Sidebar.css";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isOpen, setActivePage, activePage } = useContext(SidebarContext);

  const SidebarCategoryTitle = ({ isOpen, title }) => {
    return isOpen && <h4 className="sidebar-category-title">{title}</h4>;
  };

  const SidebarCategorySeparator = ({ isOpen }) => {
    return (
      !isOpen && (
        <div className="category-separator" style={{ width: "70%" }}></div>
      )
    );
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"} ${theme}`}>
      <div className="menus-container">
        <SidebarCategoryTitle isOpen={isOpen} title="User Management" />
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

        <SidebarCategorySeparator isOpen={isOpen} />

        <SidebarCategoryTitle isOpen={isOpen} title="Analytics" />
        <SidebarButton
          image={icons.analytics}
          title="Analytics"
          isActive={activePage === "Analytics"}
          onClick={() => setActivePage("Analytics")}
        />

        <SidebarCategorySeparator isOpen={isOpen} />

        <SidebarCategoryTitle isOpen={isOpen} title="Complaints" />
        <SidebarButton
          image={icons.complains}
          title="Manage Complains"
          isActive={activePage === "Manage Complains"}
          onClick={() => setActivePage("Manage Complains")}
        />

        <SidebarCategorySeparator isOpen={isOpen} />

        <SidebarCategoryTitle isOpen={isOpen} title="Logs" />
        <SidebarButton
          image={icons.auditIcon}
          title="Audit Logs"
          isActive={activePage === "Audit Logs"}
          onClick={() => setActivePage("Audit Logs")}
        />
      </div>
      <div className="copyright-container">
        <img
          style={{
            width: isOpen
              ? "var(--sidebar-copyright-logo-width-open)"
              : "var(--sidebar-copyright-logo-width-closed)",
          }}
          className="copyright-logo"
          src={icons.swiftRentLogoWhiteSVG}
          alt="swift rent logo"
        />

        <p
          style={{
            fontSize: isOpen
              ? "var(--sidebar-copyright-text-width-open)"
              : "var(--sidebar-copyright-text-width-closed)",
          }}
        >
          {isOpen ? "Copyright " : ""} &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
