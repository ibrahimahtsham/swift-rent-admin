import { Grid, ThemeProvider, createTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import Areas from "./areas/Areas";
import Cities from "./cities/Cities";

// Theme definitions
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

const ManageCities = () => {
  // State variables
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedCityID, setSelectedCityID] = useState(null);

  // Theme context
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Cities
            cities={cities}
            setCities={setCities}
            selectedCityID={selectedCityID}
            setSelectedCityID={setSelectedCityID}
          />
        </Grid>

        <Grid item xs={6}>
          <Areas
            cities={cities}
            areas={areas}
            setAreas={setAreas}
            selectedCityID={selectedCityID}
            setSelectedCityID={setSelectedCityID}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ManageCities;
