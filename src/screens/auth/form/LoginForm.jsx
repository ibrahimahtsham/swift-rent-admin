import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import "../Login.css";

const StyledButton = styled(Button)({
  backgroundColor: "#808080",
  "&:hover": {
    backgroundColor: "#666666",
  },
  fontFamily: "Open Sans",
  textTransform: "none",
});

export const LoginForm = ({ formik, theme }) => (
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
