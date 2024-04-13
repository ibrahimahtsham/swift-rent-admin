import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("Main Page");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, activePage, setActivePage, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
