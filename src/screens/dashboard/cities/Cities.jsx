import { Grid, ThemeProvider, createTheme } from "@mui/material";
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
    { id: 1, city: "Islamabad" },
    { id: 2, city: "Rawalpindi" },
  ]);
  const [areas, setAreas] = useState([
    { id: 1, area: "G-11/1", cityID: 1 },
    { id: 2, area: "Satellite-Town", cityID: 2 },
  ]);

  const { theme } = useContext(ThemeContext);

  const handleAddCity = (values, { resetForm }) => {
    const newCity = { id: cities.length + 1, city: values.city };
    setCities([...cities, newCity]);
    resetForm();
  };

  const handleAddArea = (values, { resetForm }) => {
    const newArea = {
      id: areas.length + 1,
      area: values.area,
      cityID: parseInt(values.city),
    };
    setAreas([...areas, newArea]);
    resetForm();
  };

  const updateCity = (id, newCity) => {
    const updatedCities = cities.map((city) =>
      city.id === id ? { ...city, ...newCity } : city
    );
    setCities(updatedCities);
  };

  const updateArea = (id, newValues) => {
    setAreas(
      areas.map((area) => (area.id === id ? { ...area, ...newValues } : area))
    );
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>Cities</h1>
          <CityForm handleAddCity={handleAddCity} />
          <CityList cities={cities} updateCity={updateCity} />
        </Grid>
        <Grid item xs={6}>
          <h1>Areas</h1>
          <AreaForm handleAddArea={handleAddArea} cities={cities} />
          <AreaList areas={areas} cities={cities} updateArea={updateArea} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Cities;
