import { useContext } from "react";
import { SidebarContext } from "../../utils/SidebarContext";
import "./Sidebar.css"; // Ensure you're importing the CSS file

const Sidebar = () => {
  const { isOpen } = useContext(SidebarContext);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <p>sidebar</p>
    </div>
  );
};

export default Sidebar;
