import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";

export const AnalyticsCard = ({ children, style }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      style={{
        height: "500px",
        padding: "20px",
        backgroundColor: theme === "dark" ? "#424242" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        ...style,
      }}
    >
      {children}
    </Card>
  );
};
