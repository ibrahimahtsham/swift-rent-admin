import React, { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import { SidebarContext } from "./../../utils/SidebarContext";
import "./SidebarButton.css";

const SidebarButton = ({ image, title, isActive, onClick }) => {
  const { theme } = useContext(ThemeContext);
  const { isOpen } = useContext(SidebarContext);
  return (
    <button
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
    </button>
  );
};

export default SidebarButton;
