import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SwiftRentLogo from "../assets/images/swift-rent-logo.png";
import "../assets/css/Login.css";

const LoginPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      setError(null);
      const response = await axios.post(`${BASE_URL}/login`, {
        emailOrPhone: formData.get("username"),
        password: formData.get("password"),
      });
      if (response?.data) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  return (
    <>
      <div className="img-div">
        <img className="login-img" src={SwiftRentLogo} alt="swift-rent-logo" />
      </div>
      <h1 className="authorize-text">Admin Login</h1>
      <form
        style={{ textAlign: "center" }}
        id="loginForm"
        onSubmit={handleLogin}
      >
        {error ? <p className="error-msg">{error?.error}</p> : null}
        <input
          className="login-textfield"
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        />
        <br />
        <input
          className="login-textfield"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <br />
        <input className="login-button" type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginPage;
