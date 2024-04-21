import ComplainRowOptions from "./ComplainRowOptions";

export const getColumns = () => [
  { field: "id", headerName: "ComplainID", width: 100 },
  { field: "complainType", headerName: "Complain Type", width: 150 },
  { field: "complainDescription", headerName: "Description", width: 250 },
  { field: "status", headerName: "Status", width: 120 },
  {
    field: "registeredOn",
    headerName: "Registered On",
    width: 250,
  },
  {
    field: "options",
    headerName: "Options",
    width: 450,
    sortable: false,
    filterable: false,
    renderCell: (params) => <ComplainRowOptions row={params.row} />,
  },
];
