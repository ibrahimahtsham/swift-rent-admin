import PropertyRowOptions from "./PropertyRowOptions";

export const getColumns = (setOpen, setEditingRowId, setEditingRowData) => [
  {
    field: "id",
    headerName: "Property ID",
    width: 150,
    editable: true,
  },
  { field: "ownerName", headerName: "Owner Name", width: 150, editable: true },
  {
    field: "tenantName",
    headerName: "Tenant Name",
    width: 150,
    editable: true,
  },
  {
    field: "managerName",
    headerName: "Manager Name",
    width: 150,
    editable: true,
  },
  { field: "address", headerName: "Address", width: 250, editable: true },
  {
    field: "registeredOn",
    headerName: "Registered On",
    width: 150,
    editable: true,
  },
  {
    field: "propertyStatus",
    headerName: "Property Status",
    width: 180,
    editable: true,
  },
  {
    field: "options",
    headerName: "Options",
    width: 350,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <PropertyRowOptions
        row={params.row}
        setOpen={setOpen}
        setEditingRowId={setEditingRowId}
        setEditingRowData={setEditingRowData}
      />
    ),
  },
];
