import Button from "@mui/material/Button";
import { darken } from "@mui/system";
import React, { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import { buttonDarkenValue } from "../../utils/constants";
import { SidebarContext } from "./../../utils/SidebarContext";
import "./SidebarButton.css";

const SidebarButton = ({ image, title, isActive, onClick }) => {
  const { theme } = useContext(ThemeContext);
  const { isOpen } = useContext(SidebarContext);
  return (
    <Button
      title={title}
      sx={{
        justifyContent: isOpen ? "space-between" : "center",
        marginBottom: "0.5vh",
        padding: "1vh 1vh",
        minWidth: "80%",
        minHeight: "25px",
        fontFamily: "Open Sans",
        "&:hover": {
          backgroundColor:
            theme === "dark"
              ? darken("#727272", buttonDarkenValue)
              : darken("#fff", buttonDarkenValue),
        },
      }}
      className={`sidebar-button ${isActive ? "active" : ""} ${theme} ${
        isOpen ? "open" : ""
      }`}
      onClick={onClick}
    >
      <img
        className={`sidebar-button-img ${isActive ? "active" : ""} ${theme} `}
        src={image}
        alt={title}
      />
      {isOpen && <span className="sidebar-title">{title}</span>}
    </Button>
  );
};

export default SidebarButton;
