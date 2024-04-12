import { useContext } from "react";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Sidebar.css"; // Ensure you're importing the CSS file

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isOpen } = useContext(SidebarContext);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""} ${theme}`}>
      <p>sidebar</p>
    </div>
  );
};

export default Sidebar;
