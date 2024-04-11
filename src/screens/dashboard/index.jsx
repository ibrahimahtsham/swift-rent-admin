import { useContext, useEffect } from "react";
import Navbar from "../../components/navbar";
import { ThemeContext } from "../../utils/ThemeContext";
import "./styles/Dashboard.css";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar />
      <div className={`dashboard-body ${theme}`}>
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
