import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useRef, useState } from "react";
import { BASE_URL } from "./db-config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize isLoggedIn state and its setter function (_setIsLoggedIn)
  // _setIsLoggedIn is the original state setter function returned by useState
  const [isLoggedIn, _setIsLoggedIn] = useState(() => {
    // Try to get the auth cookie
    const cookieLoggedIn = Cookies.get("auth");
    // If the cookie exists, use its value as the initial state, otherwise default to false
    return cookieLoggedIn ? cookieLoggedIn : false;
  });

  // Create a ref to hold the current value of isLoggedIn
  // This ref is used to have a synchronous way of accessing the latest state
  const isLoggedInRef = useRef(isLoggedIn);

  // Define a new setIsLoggedIn function that updates both the state and the ref
  // This function wraps _setIsLoggedIn and adds additional functionality
  // Specifically, it also updates the isLoggedInRef ref whenever the state is updated
  const setIsLoggedIn = (value) => {
    // Update the ref
    isLoggedInRef.current = value;
    // Update the state
    _setIsLoggedIn(value);
  };

  const login = async (username, password, setFieldError) => {
    const data = {
      userName: username,
      password: password,
    };

    try {
      const response = await axios.post(`${BASE_URL}/api/admin/login/`, data);
      if (response.status === 200) {
        // Use the setIsLoggedIn function to update the state
        // This will also update the ref, so isLoggedInRef.current will be the latest state
        setIsLoggedIn(true);
        // Set the auth cookie
        Cookies.set("auth", "true");
      } else {
        setFieldError("username", "Invalid credentials");
        setFieldError("password", "Invalid credentials");
      }
    } catch (error) {
      setFieldError("username", "An error occurred");
      setFieldError("password", "An error occurred");
      console.log(error);
    }
  };

  const logout = () => {
    // Remove the auth cookie
    Cookies.remove("auth");
    // Use the setIsLoggedIn function to update the state
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
