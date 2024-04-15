import DataTable from "../../components/DataTable";
import { icons } from "../../utils/ImageImports";
import { rows } from "../../utils/data/UsersData";

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
    width: 250,
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div
            onClick={handleResetPassword}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: "#FFD93D",
              padding: 5,
              borderRadius: 5,
            }}
          >
            <span style={{ color: "#000" }}>Reset Pass</span>
            <img src={icons.resetPasswordIcon} alt="Reset Password" />
          </div>
          <img
            src={icons.deleteIcon}
            alt="Delete"
            onClick={handleDelete}
            style={{
              cursor: "pointer",
              backgroundColor: "#f52929",
              padding: 5,
              borderRadius: 5,
            }}
          />
        </div>
      );
    },
  },
];

export default function Users() {
  return <DataTable title="Users" rows={rows} columns={columns} />;
}
