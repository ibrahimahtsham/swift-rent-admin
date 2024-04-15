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

const EditUserPopup = ({ open, handleClose, handleSave, editingRowData }) => {
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
              editingRowData || {
                firstName: "",
                lastName: "",
                dob: "",
                phone: "",
                email: "",
                isManager: false,
                isOwner: false,
                isTenant: false,
                registeredOn: "",
              }
            }
            validationSchema={editUserSchema}
            onSubmit={handleSave}
          >
            {({ errors, touched, values, handleChange, handleBlur }) => (
              <Form>
                <Field
                  as={TextField}
                  autoFocus
                  margin="dense"
                  label="First Name"
                  type="text"
                  fullWidth
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="firstName"
                  error={touched.firstName && !!errors.firstName}
                  helperText={<ErrorMessage name="firstName" />}
                />

                <Field
                  as={TextField}
                  margin="dense"
                  label="Last Name"
                  type="text"
                  fullWidth
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="lastName"
                  error={touched.lastName && !!errors.lastName}
                  helperText={<ErrorMessage name="lastName" />}
                />

                <Field
                  as={TextField}
                  margin="dense"
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="dob"
                  error={touched.dob && !!errors.dob}
                  helperText={<ErrorMessage name="dob" />}
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
                />

                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      checked={values.isManager}
                      onChange={handleChange}
                      name="isManager"
                    />
                  }
                  label="Is Manager"
                />

                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      checked={values.isOwner}
                      onChange={handleChange}
                      name="isOwner"
                    />
                  }
                  label="Is Owner"
                />

                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      checked={values.isTenant}
                      onChange={handleChange}
                      name="isTenant"
                    />
                  }
                  label="Is Tenant"
                />

                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Save</Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default EditUserPopup;
