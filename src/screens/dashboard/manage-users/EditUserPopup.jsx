import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import { editUserSchema } from "./../../../utils/validation/EditUserValidation";

const EditUserPopup = ({ open, handleClose, handleSave, editingRow }) => {
  const { theme } = useContext(ThemeContext);

  const dialogTheme = createTheme({
    palette: {
      mode: theme === "light" ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={dialogTheme}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={
              editingRow || {
                firstname: "",
                lastname: "",
                dob: "",
                phone: "",
                email: "",
                ismanager: false,
                isowner: false,
                istenant: false,
                registeredon: "",
              }
            }
            validationSchema={editUserSchema}
            onSubmit={handleSave}
          >
            {({ errors, touched, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <Field
                    as={TextField}
                    autoFocus
                    margin="dense"
                    label="First Name"
                    type="text"
                    fullWidth
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="firstname"
                    error={touched.firstname && !!errors.firstname}
                    helperText={<ErrorMessage name="firstname" />}
                    required
                  />

                  <Field
                    as={TextField}
                    margin="dense"
                    label="Last Name"
                    type="text"
                    fullWidth
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="lastname"
                    error={touched.lastname && !!errors.lastname}
                    helperText={<ErrorMessage name="lastname" />}
                    required
                  />

                  <Field
                    as={TextField}
                    margin="dense"
                    label="Date of Birth"
                    type="text" // change this to text
                    fullWidth
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="dob"
                    error={touched.dob && !!errors.dob}
                    helperText={<ErrorMessage name="dob" />}
                    required
                  />

                  <Field
                    as={TextField}
                    margin="dense"
                    label="Phone"
                    type="text"
                    fullWidth
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="phone"
                    error={touched.phone && !!errors.phone}
                    helperText={<ErrorMessage name="phone" />}
                    required
                  />

                  <Field
                    as={TextField}
                    margin="dense"
                    label="Email"
                    type="email"
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    error={touched.email && !!errors.email}
                    helperText={<ErrorMessage name="email" />}
                    required
                  />

                  <FormControlLabel
                    control={
                      <Field
                        as={Checkbox}
                        checked={values.isowner}
                        onChange={handleChange}
                        name="isowner"
                      />
                    }
                    label="Is Owner"
                  />

                  <FormControlLabel
                    control={
                      <Field
                        as={Checkbox}
                        checked={values.ismanager}
                        onChange={handleChange}
                        name="ismanager"
                      />
                    }
                    label="Is Manager"
                  />

                  <FormControlLabel
                    control={
                      <Field
                        as={Checkbox}
                        checked={values.istenant}
                        onChange={handleChange}
                        name="istenant"
                      />
                    }
                    label="Is Tenant"
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

export default EditUserPopup;
