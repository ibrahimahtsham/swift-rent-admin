import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GlobalStyles, styled } from "@mui/system";
import React, { useState } from "react";
import "../Login.css";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#808080",
  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#3da6db" : "#666666",
  },
  fontFamily: "Open Sans",
  textTransform: "none",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "3vh",
  width: "25ch",
}));

const LoginForm = ({ formik, theme }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <ThemeProvider theme={createTheme({ palette: { mode: theme } })}>
        <GlobalStyles
          styles={{
            "input:-webkit-autofill": {
              WebkitBoxShadow:
                theme === "dark"
                  ? "0 0 0px 1000px rgba(204, 204, 0, 0.2) inset !important"
                  : "0 0 0px 1000px #ffffcc inset !important",
              WebkitTextFillColor:
                theme === "dark" ? "#fff !important" : "#000 !important",
              transition: "background-color 5000s ease-in-out 0s",
            },
          }}
        />
        <StyledTextField
          label="Username"
          type="text"
          name="username"
          id="username"
          {...formik.getFieldProps("username")}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          required
        />

        <StyledTextField
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          required
          InputProps={{
            // Add this prop
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <StyledButton type="submit" className={`login-button ${theme}`}>
          Login
        </StyledButton>
      </ThemeProvider>
    </form>
  );
};

export default LoginForm;
