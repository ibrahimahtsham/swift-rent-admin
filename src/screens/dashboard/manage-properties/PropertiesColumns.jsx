export const getColumns = (setOpen, setEditingRowId, setEditingRowData) => [
  {
    field: "propertyid",
    headerName: "Property ID",
    width: 150,
  },
  { field: "ownerid", headerName: "Owner ID", width: 150 },
  { field: "ownername", headerName: "Owner Name", width: 150 },
  { field: "tenantid", headerName: "Tenant ID", width: 150 },
  {
    field: "tenantname",
    headerName: "Tenant Name",
    width: 150,
  },
  { field: "managerid", headerName: "Manager ID", width: 150 },
  {
    field: "managername",
    headerName: "Manager Name",
    width: 150,
  },
  { field: "fulladdress", headerName: "Address", width: 250 },
  {
    field: "propertyregisteredon",
    headerName: "Registered On",
    width: 150,
  },
  { field: "propertyonrentdays", headerName: "Days on Rent", width: 150 },
  {
    field: "propertyoffrentdays",
    headerName: "Days off Rent",
    width: 150,
  },
  {
    field: "propertystatus",
    headerName: "Property Status",
    width: 180,
  },
  // {
  //   field: "options",
  //   headerName: "Options",
  //   width: 350,
  //   sortable: false,
  //   filterable: false,
  //   renderCell: (params) => (
  //     <PropertyRowOptions
  //       row={params.row}
  //       setOpen={setOpen}
  //       setEditingRowId={setEditingRowId}
  //       setEditingRowData={setEditingRowData}
  //     />
  //   ),
  // },
];
