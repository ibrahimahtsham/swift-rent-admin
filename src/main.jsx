import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/colors.css";
import "./styles/fonts.css";
import { ThemeProvider } from "./utils/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
