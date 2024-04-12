import { useContext } from "react";
import { icons } from "../../utils/ImageImports";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isOpen } = useContext(SidebarContext);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"} ${theme}`}>
      <div className="menus-container">
        <p>sidebar</p>
      </div>
      <div className="copyright-container">
        <img
          className="copyright-logo"
          src={icons.swiftRentLogoColor}
          alt="swift rent logo"
        />

        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Sidebar;
