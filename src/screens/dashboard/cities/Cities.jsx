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
  const [areas, setAreas] = useState([]);

  // Fetch list of cities when component mounts
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/admin/cityList`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const [selectedCityId, setSelectedCityId] = useState(null);

  const { theme } = useContext(ThemeContext);

  const fetchAreas = async (cityId) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/areaList`,
        { cityID: cityId },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      setAreas(response.data);
    } catch (error) {
      console.error(`Error fetching areas: ${error.message}`);
    }
  };

  const handleAddCity = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/addCity`,
        { cityName: values.city },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.status === 200) {
        const newCity = {
          id: response.data.id,
          cityname: response.data.cityname,
        };
        setCities([...cities, newCity]);
        resetForm();
      } else {
        throw new Error("Failed to add city");
      }
    } catch (error) {
      console.error(`Error adding city: ${error.message}`);
    }
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

  const handleCityChange = async (event) => {
    const cityId = parseInt(event.target.value);
    setSelectedCityId(cityId);
    await fetchAreas(cityId); // Fetch areas for the selected city
  };

  const updateCity = (id, newCity) => {
    const updatedCity = cities.map((city) =>
      city.id === id ? { ...city, ...newCity } : city
    );
    setCities(updatedCity);
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
