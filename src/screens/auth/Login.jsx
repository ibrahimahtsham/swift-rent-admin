import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../utils/AuthContext.jsx";
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
  const { login } = useContext(AuthContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit: async (values, { setFieldError }) => {
      login(values.username, values.password, setFieldError);
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
