import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../../utils/ImageImports";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Navbar.css";

const StyledButton = styled(Button)({
  marginLeft: "1vw",
  "&:hover": {
    backgroundColor: "#104cb7",
  },
  fontFamily: "Open Sans",
  textTransform: "none",
});

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggleSidebar, setActivePage, isOpen } = useContext(SidebarContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="left-container">
        <img
          className={`navbar-menu-icon ${isOpen ? "open" : ""} ${theme}`}
          src={icons.hamburgerMenu}
          alt="menu icon"
          onClick={toggleSidebar}
        />
        <div
          className="icon-and-logo-container"
          onClick={() => setActivePage("Main Page")}
        >
          <img
            src={icons.swiftRentLogoWhiteSVG}
            alt="Logo"
            className="navbar-logo"
          />
          <h1 className="navbar-title">Swift Rent</h1>
        </div>
      </div>
      <div className="right-container">
        <img
          src={theme === "light" ? icons.sunIconWhite : icons.moonIcon}
          alt="Theme icon"
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
          className={`navbar-theme-icon ${theme}`}
        />
        <StyledButton
          className={`logout-button ${theme}`}
          onClick={() => navigate("/", { replace: true })}
        >
          Logout
        </StyledButton>
      </div>
    </nav>
  );
};

export default Navbar;
