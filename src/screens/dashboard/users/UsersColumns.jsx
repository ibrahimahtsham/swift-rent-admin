import UserRowOptions from "./UserRowOptions";

export const getColumns = (setOpen, setEditingRowId, setEditingRowData) => [
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
    renderCell: (params) => (
      <UserRowOptions
        row={params.row}
        setOpen={setOpen}
        setEditingRowId={setEditingRowId}
        setEditingRowData={setEditingRowData}
      />
    ),
  },
];
