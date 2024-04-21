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
import { editPropertySchema } from "./../../../utils/validation/EditPropertyValidation";

const EditPropertyPopup = ({
  open,
  handleClose,
  handleSave,
  editingRowData,
}) => {
  const { theme } = useContext(ThemeContext);

  const dialogTheme = createTheme({
    palette: {
      mode: theme === "light" ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={dialogTheme}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Property</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={
              editingRowData || {
                ownerName: "",
                tenantName: "",
                managerName: "",
                address: "",
                propertyStatus: "",
              }
            }
            validationSchema={editPropertySchema}
            onSubmit={handleSave}
          >
            {({ errors, touched, values, handleChange, handleBlur }) => (
              <Form>
                <Field
                  as={TextField}
                  autoFocus
                  margin="dense"
                  label="Owner Name"
                  type="text"
                  fullWidth
                  value={values.ownerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="ownerName"
                  error={touched.ownerName && !!errors.ownerName}
                  helperText={<ErrorMessage name="ownerName" />}
                  required
                />

                <Field
                  as={TextField}
                  margin="dense"
                  label="Tenant Name"
                  type="text"
                  fullWidth
                  value={values.tenantName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="tenantName"
                  error={touched.tenantName && !!errors.tenantName}
                  helperText={<ErrorMessage name="tenantName" />}
                  required
                />

                <Field
                  as={TextField}
                  margin="dense"
                  label="Manager Name"
                  type="text"
                  fullWidth
                  value={values.managerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="managerName"
                  error={touched.managerName && !!errors.managerName}
                  helperText={<ErrorMessage name="managerName" />}
                  required
                />

                <Field
                  as={TextField}
                  margin="dense"
                  label="Address"
                  type="text"
                  fullWidth
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="address"
                  error={touched.address && !!errors.address}
                  helperText={<ErrorMessage name="address" />}
                  required
                />

                <Field
                  as={TextField}
                  margin="dense"
                  label="Property Status"
                  type="text"
                  fullWidth
                  value={values.propertyStatus}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="propertyStatus"
                  error={touched.propertyStatus && !!errors.propertyStatus}
                  helperText={<ErrorMessage name="propertyStatus" />}
                  required
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

export default EditPropertyPopup;
