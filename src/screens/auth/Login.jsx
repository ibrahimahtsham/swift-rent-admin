// Login.jsx
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../../utils/ImageImports.js";
import { loginValidation } from "../../utils/validation/loginValidation.js";
import { ThemeContext } from "./../../utils/ThemeContext.js";
import "./Login.css";
import { LoginForm } from "./form/LoginForm.jsx";

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
    onSubmit: (values, { setFieldError }) => {
      // Handle login logic here with values.username and values.password
      if (
        values.username === "admin" &&
        values.password === "unpredictable69"
      ) {
        navigate("/dashboard", { replace: true });
      } else {
        // Set errors manually
        setFieldError("username", "Invalid credentials");
        setFieldError("password", "Invalid credentials");
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
        <img src={icons.swiftRentLogo} alt="Logo" className="logo" />
        <h2 className="login-text">Authorization</h2>
        <LoginForm formik={formik} theme={theme} />
      </div>
    </>
  );
};

export default Login;
