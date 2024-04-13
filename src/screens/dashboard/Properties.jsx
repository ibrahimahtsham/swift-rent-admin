import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { icons } from "../../utils/ImageImports";
import { ThemeContext } from "../../utils/ThemeContext";
import { rows } from "../../utils/data/PropertiesData";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const columns = [
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
    width: 150,
    editable: true,
  },
  {
    field: "options",
    headerName: "Options",
    width: 150,
    renderCell: (params) => {
      const handleDelete = () => {
        // Implement the logic to delete the property here
        console.log(`Delete property ${params.row.id}`);
      };

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: "#f52929",
            padding: 5,
            borderRadius: 5,
          }}
          onClick={handleDelete}
        >
          <img src={icons.deleteIcon} alt="Delete" />
        </div>
      );
    },
  },
];

export default function Properties() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div style={{ height: "100%", width: "100%" }}>
        <h1>Properties</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            ...rows.initialState,
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          disableSelectionOnClick
        />
      </div>
    </ThemeProvider>
  );
}
