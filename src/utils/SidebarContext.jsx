import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize activePage from sessionStorage or default to "Main Page"
  const [activePage, setActivePage] = useState(
    sessionStorage.getItem("activePage") || "Main Page"
  );

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Update sessionStorage whenever activePage changes
  useEffect(() => {
    sessionStorage.setItem("activePage", activePage);
  }, [activePage]);

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, activePage, setActivePage, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
