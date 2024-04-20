import React, { useContext, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./screens/auth/Login";
import Dashboard from "./screens/dashboard";
import { AuthContext, AuthProvider } from "./utils/AuthContext";
import { SidebarProvider } from "./utils/SidebarContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

function AppContent() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <SidebarProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </SidebarProvider>
  );
}

export default App;
