import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

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

const DataTable = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div style={{ minHeight: "450px", height: "80%", width: "100%" }}>
        <h1>{props.title}</h1>
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            ...props.rows.initialState,
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </ThemeProvider>
  );
};

export default DataTable;
