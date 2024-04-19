import { Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import AreaForm from "./AreaForm";
import AreaList from "./AreaList";
import CityForm from "./CityForm";
import CityList from "./CityList";

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

const Cities = () => {
  const [cities, setCities] = useState([
    {
      id: 1,
      city: "Islamabad",
    },
    {
      id: 2,
      city: "Rawalpindi",
    },
  ]);
  const [areas, setAreas] = useState([
    {
      id: 1,
      area: "G-11/1",
      city: "Islamabad",
    },
    {
      id: 2,
      area: "Satellite-Town",
      city: "Rawalpindi",
    },
  ]);
  const { theme } = useContext(ThemeContext);

  const handleAddCity = (values, { resetForm }) => {
    setCities([...cities, values.city]);
    resetForm();
  };

  const updateCity = (id, newCity) => {
    setCities((prevCities) =>
      prevCities.map((city) =>
        city.id === id ? { id: id, city: newCity.city } : city
      )
    );
  };

  const handleAddArea = (values, { resetForm }) => {
    setAreas([...areas, { area: values.area, city: values.city }]);
    resetForm();
  };

  const updateArea = (id, newValues) => {
    setAreas((prevAreas) =>
      prevAreas.map((area) =>
        area.id === id ? { ...area, ...newValues } : area
      )
    );
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Cities
          </Typography>
          <CityForm handleAddCity={handleAddCity} />
          <CityList cities={cities} updateCity={updateCity} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Areas
          </Typography>
          <AreaForm handleAddArea={handleAddArea} cities={cities} />
          <AreaList areas={areas} cities={cities} updateArea={updateArea} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Cities;
