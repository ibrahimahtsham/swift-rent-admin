import UserRowOptions from "./UserRowOptions";

export const getColumns = (setOpen, setEditingRowId, setEditingRowData) => [
  { field: "id", headerName: "UserID", width: 100 },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    editable: true,
  },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "dob", headerName: "DOB", width: 110 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "password", headerName: "Password", width: 150 },
  {
    field: "isManager",
    headerName: "Is Manager",
    width: 130,
    editable: true,
  },
  { field: "isOwner", headerName: "Is Owner", width: 110 },
  { field: "isTenant", headerName: "Is Tenant", width: 110 },
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
