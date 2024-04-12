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
          image={icons.sunIcon}
          title="Button 1"
          isActive={activeButton === "Button 1"}
          onClick={() => setActiveButton("Button 1")}
        />
        <SidebarButton
          image={icons.sunIcon}
          title="Button 2"
          isActive={activeButton === "Button 2"}
          onClick={() => setActiveButton("Button 2")}
        />
        <SidebarButton
          image={icons.sunIcon}
          title="Button 3"
          isActive={activeButton === "Button 3"}
          onClick={() => setActiveButton("Button 3")}
        />
      </div>
      <div className="copyright-container">
        <img
          style={{ width: isOpen ? "auto" : "30px" }}
          className="copyright-logo"
          src={
            theme === "light"
              ? icons.swiftRentLogoBlackSVG
              : icons.swiftRentLogoWhiteSVG
          }
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
