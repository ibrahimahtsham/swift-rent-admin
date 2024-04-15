import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import "../Login.css";

const LoginForm = ({ formik, theme }) => {
  const StyledButton = styled(Button)({
    backgroundColor: "#808080",
    "&:hover": { backgroundColor: theme === "light" ? "#3da6db" : "#666666" },
    fontFamily: "Open Sans",
    textTransform: "none",
  });

  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <ThemeProvider theme={createTheme({ palette: { mode: theme } })}>
        <TextField
          label="Username"
          type="text"
          name="username"
          id="username"
          {...formik.getFieldProps("username")}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          required
          sx={{ marginBottom: "3vh" }}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          id="password"
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          required
          sx={{ marginBottom: "3vh" }}
        />
        <StyledButton type="submit" className={`login-button ${theme}`}>
          Login
        </StyledButton>
      </ThemeProvider>
    </form>
  );
};

export default LoginForm;
