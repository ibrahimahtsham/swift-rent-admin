import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import "../Login.css";

const StyledButton = styled(Button)({
  backgroundColor: "#808080",
  "&:hover": {
    backgroundColor: "#666666", // A darker shade of #808080
  },
  fontFamily: "Open Sans",
  textTransform: "none",
});

export const LoginForm = ({ formik, theme }) => (
  <form className="login-form" onSubmit={formik.handleSubmit}>
    <div className="input-field">
      <input
        type="text"
        name="username"
        id="username"
        {...formik.getFieldProps("username")}
        className={`input-field-input ${theme} ${
          formik.touched.username && formik.errors.username ? "error" : ""
        }`}
        required
      />
      <label
        htmlFor="username"
        className={`input-field-label ${theme} ${
          formik.touched.username && formik.errors.username ? "error" : ""
        }`}
      >
        Username
      </label>
      {formik.touched.username && formik.errors.username ? (
        <div className="error-text">{formik.errors.username}</div>
      ) : null}
    </div>
    <div className="input-field">
      <input
        type="password"
        name="password"
        id="password"
        {...formik.getFieldProps("password")}
        className={`input-field-input ${theme} ${
          formik.touched.password && formik.errors.password ? "error" : ""
        }`}
        required
      />
      <label
        htmlFor="password"
        className={`input-field-label ${theme} ${
          formik.touched.password && formik.errors.password ? "error" : ""
        }`}
      >
        Password
      </label>
      {formik.touched.password && formik.errors.password ? (
        <div className="error-text">{formik.errors.password}</div>
      ) : null}
    </div>
    <StyledButton type="submit" className={`login-button ${theme}`}>
      Login
    </StyledButton>
  </form>
);
