import UserRowOptions from "./UserRowOptions";

const vw =
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) /
  100;

export const getColumns = (setOpen, setEditingRowId, setEditingRowData) => [
  { field: "id", headerName: "UserID", width: 10 * vw },
  {
    field: "firstName",
    headerName: "First name",
    width: 13 * vw,
    editable: true,
  },
  { field: "lastName", headerName: "Last name", width: 13 * vw },
  { field: "dob", headerName: "DOB", width: 11 * vw },
  { field: "phone", headerName: "Phone", width: 15 * vw },
  { field: "email", headerName: "Email", width: 25 * vw },
  { field: "password", headerName: "Password", width: 15 * vw },
  {
    field: "isManager",
    headerName: "Is Manager",
    width: 13 * vw,
    editable: true,
  },
  { field: "isOwner", headerName: "Is Owner", width: 11 * vw },
  { field: "isTenant", headerName: "Is Tenant", width: 11 * vw },
  {
    field: "registeredOn",
    headerName: "Registered On",
    width: 25 * vw,
    editable: true,
  },
  {
    field: "options",
    headerName: "Options",
    width: 35 * vw,
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
