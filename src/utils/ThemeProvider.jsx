import Cookies from "js-cookie";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Try to get the theme from a cookie
    const cookieTheme = Cookies.get("theme");
    // If the cookie exists, use its value as the initial theme, otherwise default to "light"
    return cookieTheme ? cookieTheme : "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      // When the theme is toggled, update the cookie
      Cookies.set("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
