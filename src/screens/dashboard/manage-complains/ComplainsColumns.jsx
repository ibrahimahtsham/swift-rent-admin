import ComplainRowOptions from "./ComplainRowOptions";

export const getColumns = (rows, setRows) => [
  { field: "id", headerName: "ComplainID", width: 100 },
  { field: "sendername", headerName: "Sender Name", width: 150 },
  { field: "sendertype", headerName: "Sender Type", width: 150 },
  { field: "complainttitle", headerName: "Complain Title", width: 200 },
  { field: "complaintdescription", headerName: "Description", width: 250 },
  { field: "complaintstatus", headerName: "Status", width: 120 },
  { field: "complaintdate", headerName: "Complaint Date", width: 150 },
  { field: "complainttime", headerName: "Complaint Time", width: 150 },
  { field: "complaintsolvedon", headerName: "Solved On", width: 200 },
  {
    field: "options",
    headerName: "Options",
    width: 450,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <ComplainRowOptions row={params.row} prevRows={rows} setRows={setRows} />
    ),
  },
];
