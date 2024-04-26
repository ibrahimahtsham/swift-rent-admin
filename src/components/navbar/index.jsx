import Button from "@mui/material/Button";
import { darken, styled } from "@mui/system";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { icons } from "../../utils/ImageImports";
import { SidebarContext } from "../../utils/SidebarContext";
import { ThemeContext } from "../../utils/ThemeContext";
import { buttonDarkenValue } from "../../utils/constants";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggleSidebar, setActivePage, isOpen } = useContext(SidebarContext);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const StyledButton = styled(Button)({
    marginLeft: "1vw",
    "&:hover": {
      backgroundColor:
        theme === "dark"
          ? darken("#1463df", buttonDarkenValue)
          : darken("#fff", buttonDarkenValue),
    },
    fontFamily: "Open Sans",
    textTransform: "none",
  });

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
          onClick={() => {
            logout();
            setActivePage("Main Page");
          }}
        >
          Logout
        </StyledButton>
      </div>
    </nav>
  );
};

export default Navbar;
