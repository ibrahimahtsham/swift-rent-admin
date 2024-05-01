import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import { resetPasswordSchema } from "../../../utils/validation/ResetPasswordValidation";

const ResetPasswordPopup = ({ open, handleClose, handleSave }) => {
  const { theme } = useContext(ThemeContext);

  const dialogTheme = createTheme({
    palette: {
      mode: theme === "light" ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={dialogTheme}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Set New Password</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              password: "",
            }}
            validationSchema={resetPasswordSchema}
            onSubmit={handleSave}
          >
            {({ errors, touched, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <Field
                    as={TextField}
                    margin="dense"
                    label="New Password"
                    type="text"
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    error={touched.password && !!errors.password}
                    helperText={<ErrorMessage name="password" />}
                    required
                  />

                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Save</Button>
                  </DialogActions>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default ResetPasswordPopup;
