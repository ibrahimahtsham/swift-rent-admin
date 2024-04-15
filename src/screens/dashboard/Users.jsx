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
import { useContext, useState } from "react";
import DataTable from "../../components/DataTable";
import { icons } from "../../utils/ImageImports";
import { ThemeContext } from "../../utils/ThemeContext";
import { rows } from "../../utils/data/UsersData";
import { editUserSchema } from "../../utils/validation/EditUserValidation";

const Users = () => {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [editingRowId, setEditingRowId] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Implement your logic to save the changes here
    console.log(`Save changes for user ${editingRowId}`);
    setOpen(false);
  };

  const [editingRowData, setEditingRowData] = useState(null);

  const columns = [
    { field: "id", headerName: "UserID", width: 100, editable: true },
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      editable: true,
    },
    { field: "lastName", headerName: "Last name", width: 130, editable: true },
    { field: "dob", headerName: "DOB", width: 110, editable: true },
    { field: "phone", headerName: "Phone", width: 150, editable: true },
    { field: "email", headerName: "Email", width: 250, editable: true },
    { field: "password", headerName: "Password", width: 150, editable: true },
    {
      field: "isManager",
      headerName: "Is Manager",
      width: 130,
      editable: true,
    },
    { field: "isOwner", headerName: "Is Owner", width: 110, editable: true },
    { field: "isTenant", headerName: "Is Tenant", width: 110, editable: true },
    {
      field: "registeredOn",
      headerName: "Registered On",
      width: 250,
      editable: true,
    },
    {
      field: "options",
      headerName: "Options",
      width: 350,
      renderCell: (params) => {
        const handleEdit = () => {
          // Set the ID and data of the row being edited and open the dialog
          setEditingRowId(params.row.id);
          setEditingRowData(params.row);
          setOpen(true);
        };

        const handleResetPassword = () => {
          // Implement the logic to reset the password here
          console.log(`Reset password for user ${params.row.id}`);
        };

        const handleDelete = () => {
          // Implement the logic to delete the user here
          console.log(`Delete user ${params.row.id}`);
        };

        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{ bgcolor: "#1463df", "&:hover": { bgcolor: "#1463df" } }}
              onClick={handleEdit}
              aria-label="Edit"
            >
              <img src={icons.editIcon} alt="Edit" />
            </Button>

            <Button
              variant="contained"
              onClick={handleResetPassword}
              startIcon={
                <img src={icons.resetPasswordIcon} alt="Reset Password" />
              }
              sx={{
                bgcolor: "#FFD93D",
                color: "black",
                "&:hover": { bgcolor: "#FFD93D" },
              }}
            >
              Reset Pass
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
              aria-label="Delete"
            >
              <img src={icons.deleteIcon} alt="Delete" />
            </Button>
          </div>
        );
      },
    },
  ];

  const dialogTheme = createTheme({
    palette: {
      mode: theme === "light" ? "light" : "dark",
    },
  });

  return (
    <>
      <DataTable title="Users" rows={rows} columns={columns} />

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
    </>
  );
};

export default Users;
