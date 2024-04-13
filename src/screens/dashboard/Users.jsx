import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import { rows } from "../../utils/data/UsersData";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const columns = [
  { field: "id", headerName: "UserID", width: 100, editable: true },
  { field: "firstName", headerName: "First name", width: 130, editable: true },
  { field: "lastName", headerName: "Last name", width: 130, editable: true },
  { field: "dob", headerName: "DOB", width: 110, editable: true },
  { field: "phone", headerName: "Phone", width: 150, editable: true },
  { field: "email", headerName: "Email", width: 250, editable: true },
  { field: "password", headerName: "Password", width: 150, editable: true },
  { field: "isManager", headerName: "Is Manager", width: 130, editable: true },
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
    width: 150,
    renderCell: (params) => {
      const handleResetPassword = () => {
        // Implement the logic to reset the password here
        console.log(`Reset password for user ${params.row.id}`);
      };

      const handleDelete = () => {
        // Implement the logic to delete the user here
        console.log(`Delete user ${params.row.id}`);
      };

      return (
        <div>
          <button onClick={handleResetPassword}>Reset Password</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      );
    },
  },
];

export default function Users() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div style={{ height: "100%", width: "100%" }}>
        <h1>Users</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          disableRowSelectionOnClick
        />
      </div>
    </ThemeProvider>
  );
}
