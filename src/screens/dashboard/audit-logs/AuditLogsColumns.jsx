export const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 150,
    editable: true,
  },
  {
    field: "ip",
    headerName: "IP Address",
    width: 200,
    editable: false,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    editable: false,
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
    editable: false,
    type: "dateTime",
  },
  {
    field: "details",
    headerName: "Details",
    width: 300,
    editable: false,
  },
];
