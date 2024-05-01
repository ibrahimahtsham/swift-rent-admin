import UserRowOptions from "./UserRowOptions";

export const getColumns = (
  setOpenEditingPopup,
  setEditingRow,
  setOpenResetPasswordPopup,
  setResetPasswordRowID,
  setRows,
  setLoading
) => [
  { field: "id", headerName: "UserID", width: 100 },
  {
    field: "firstname",
    headerName: "First name",
    width: 130,
  },
  { field: "lastname", headerName: "Last name", width: 130 },
  { field: "dob", headerName: "DOB", width: 110 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "isowner", headerName: "Is Owner", width: 110 },
  {
    field: "ismanager",
    headerName: "Is Manager",
    width: 130,
  },
  { field: "istenant", headerName: "Is Tenant", width: 110 },
  { field: "isbanned", headerName: "Is Banned", width: 110 },
  {
    field: "registeredon",
    headerName: "Registered On",
    width: 250,
  },
  {
    field: "options",
    headerName: "Options",
    width: 350,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <UserRowOptions
        row={params.row}
        setOpenEditingPopup={setOpenEditingPopup}
        setEditingRow={setEditingRow}
        setOpenResetPasswordPopup={setOpenResetPasswordPopup}
        setResetPasswordRowID={setResetPasswordRowID}
        setRows={setRows}
        setLoading={setLoading}
      />
    ),
  },
];
