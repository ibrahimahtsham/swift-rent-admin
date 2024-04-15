import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GlobalStyles, styled } from "@mui/system";
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
}));

const LoginForm = ({ formik, theme }) => {
  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <ThemeProvider theme={createTheme({ palette: { mode: theme } })}>
        <GlobalStyles
          styles={{
            "input:-webkit-autofill": {
              WebkitBoxShadow:
                theme === "dark"
                  ? "0 0 0 100px #444 inset !important"
                  : "0 0 0 100px #ffffcc inset !important",
              WebkitTextFillColor:
                theme === "dark" ? "#fff !important" : "#000 !important",
            },
            "input:-moz-autofill": {
              boxShadow:
                theme === "dark"
                  ? "0 0 0 100px #444 inset !important"
                  : "0 0 0 100px #ffffcc inset !important",
              color: theme === "dark" ? "#fff !important" : "#000 !important",
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
          type="password"
          name="password"
          id="password"
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          required
        />
        <StyledButton type="submit" className={`login-button ${theme}`}>
          Login
        </StyledButton>
      </ThemeProvider>
    </form>
  );
};

export default LoginForm;
