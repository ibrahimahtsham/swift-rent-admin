import axios from "axios";
import { BASE_URL } from "../utils/constants"; // api url
import { useState } from "react"; // store state of error to be shown if error occurs
import { redirect, useNavigate } from "react-router-dom"; // to navigate to dashboard
import { getCookie } from "../utils/helpers";

import SwiftRentLogo from "../assets/images/swift-rent-logo.png";
import "../assets/css/Login.css";

const LoginPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // function to handle the click on login
  const handleLogin = async (event) => {
    event.preventDefault(); //used this to pause console for debugging
    const formData = new FormData(event.target); // to store data coming from html form (input feilds)

    try {
      setError(null); //reset error so it doesnt get show the prev error again
      const response = await axios.post(`${BASE_URL}/admin/login`, {
        userName: formData.get("username"),
        password: formData.get("password"),
      });
      if (response?.data) {
        document.cookie = `loggedIn=true; expires=${new Date()}; path=/`;
        navigate("/dashboard/main");
      }
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  return (
    <div className="main-body">
      <div className="img-div">
        <img className="login-img" src={SwiftRentLogo} alt="swift-rent-logo" />
      </div>
      <br />
      <br />
      <br />
      <h1 className="authorize-text">Admin Login</h1>
      <form
        style={{ textAlign: "center" }}
        id="loginForm"
        onSubmit={handleLogin}
      >
        {/*if there is an error then show the error*/}
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
    </div>
  );
};

export default LoginPage;

export function loader() {
  const isLoggedIn = getCookie("loggedIn");
  if (isLoggedIn) return redirect("/dashboard/main");
  return null;
}
