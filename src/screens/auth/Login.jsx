// Login.jsx
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../db-config.js";
import { icons } from "../../utils/ImageImports.js";
import { loginValidation } from "../../utils/validation/loginValidation.js";
import { ThemeContext } from "./../../utils/ThemeContext.js";
import "./Login.css";
import LoginForm from "./form/LoginForm.jsx";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit: async (values, { setFieldError }) => {
      const data = {
        userName: values.username,
        password: values.password,
      };

      try {
        const response = await axios.post(`${BASE_URL}/api/admin/login/`, data);
        if (response.status === 200) {
          // Handle successful login here, e.g., navigate to dashboard
          navigate("/dashboard", { replace: true });
        } else {
          // Handle unsuccessful login here, e.g., set field errors
          setFieldError("username", "Invalid credentials");
          setFieldError("password", "Invalid credentials");
        }
      } catch (error) {
        // Handle error here, e.g., set field errors
        setFieldError("username", "An error occurred");
        setFieldError("password", "An error occurred");
        console.log(error);
      }
    },
  });

  return (
    <>
      <img
        src={theme === "light" ? icons.sunIcon : icons.moonIcon}
        alt="Theme icon"
        onClick={toggleTheme}
        style={{ cursor: "pointer" }}
        className="theme-icon"
      />
      <div className="login-container">
        <img
          src={icons.swiftRentLogoColorSVG}
          alt="Swift Rent Logo"
          className="logo"
        />
        <h2 className="login-text">Authorization</h2>
        <LoginForm formik={formik} theme={theme} />
      </div>
    </>
  );
};

export default Login;
