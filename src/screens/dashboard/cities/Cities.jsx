import { Grid, ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import { BASE_URL } from "../../../utils/db-config";
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
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([
    { id: 1, area: "G-11/1", cityID: 1 },
    { id: 2, area: "Satellite-Town", cityID: 2 },
  ]);

  // Fetch list of cities when component mounts
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/admin/cityList`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        console.log("Full response:", response);
        console.log("Cities:", response.data);
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const [selectedCityId, setSelectedCityId] = useState(null);

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

  const handleCityChange = (event) => {
    setSelectedCityId(parseInt(event.target.value));
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
          <AreaForm
            handleAddArea={handleAddArea}
            cities={cities}
            onCityChange={handleCityChange}
          />
          <AreaList
            areas={areas}
            cities={cities}
            selectedCityId={selectedCityId}
            updateArea={updateArea}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Cities;
