import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../../utils/ImageImports";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="left-container">
        <img
          className="navbar-menu-icon"
          src={icons.hamburgerMenu}
          alt="menu icon"
          onClick={toggleSidebar}
        />
        {console.log(isOpen)}
        <img
          src={icons.swiftRentLogoWhite}
          alt="Logo"
          className="navbar-logo"
        />
        <h4 className="navbar-title">Swift Rent</h4>
      </div>
      <div className="right-container">
        <img
          src={theme === "light" ? icons.sunIconWhite : icons.moonIcon}
          alt="Theme icon"
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
          className={`navbar-theme-icon ${theme}`}
        />
        <button
          className={`logout-button ${theme}`}
          onClick={() => navigate("/", { replace: true })}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
