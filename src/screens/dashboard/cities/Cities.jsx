import { Grid, ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import { BASE_URL } from "../../../utils/db-config";
import AreaForm from "./AreaForm";
import AreaList from "./AreaList";
import CityForm from "./CityForm";
import CityList from "./CityList";

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

const Cities = () => {
  // State variables
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedCityID, setSelectedCityID] = useState(null);
  const [loadingAddCity, setLoadingAddCity] = useState(false);
  const [loadingAddArea, setLoadingAddArea] = useState(false);

  // Theme context
  const { theme } = useContext(ThemeContext);

  // Fetch cities on component mount
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

  // Fetch areas based on selected city
  const fetchAreas = async (cityID) => {
    setAreas([]);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/areaList`,
        { cityID: cityID },
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

  // Handlers for adding city and area
  const handleAddCity = async (values, { resetForm }) => {
    setLoadingAddCity(true);
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
    } finally {
      setLoadingAddCity(false);
    }
  };

  const handleAddArea = async (values) => {
    setLoadingAddArea(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/addArea`,
        {
          cityID: parseInt(values.city),
          areaName: values.area,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.status === 200) {
        const newArea = {
          id: response.data.id,
          cityid: response.data.cityid,
          areaname: response.data.areaname,
        };
        setAreas([...areas, newArea]);
      } else {
        throw new Error("Failed to add area");
      }
    } catch (error) {
      console.error(`Error adding area: ${error.message}`);
    } finally {
      setLoadingAddArea(false);
    }
  };

  // Handlers for city and area updates and deletions
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

  const deleteCity = (id) => {
    const updatedCities = cities.filter((city) => city.id !== id);
    setCities(updatedCities);
  };

  const deleteArea = (id) => {
    const updatedAreas = areas.filter((area) => area.id !== id);
    setAreas(updatedAreas);
  };

  // Handle city change to fetch areas
  const handleCityChange = async (event) => {
    const cityID = parseInt(event.target.value);
    setSelectedCityID(cityID);
    await fetchAreas(cityID);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>Cities</h1>
          <CityForm
            handleAddCity={handleAddCity}
            loadingAddCity={loadingAddCity}
          />
          <CityList
            cities={cities}
            updateCity={updateCity}
            deleteCity={deleteCity}
            selectedCityID={selectedCityID}
            setSelectedCityID={setSelectedCityID}
          />
        </Grid>

        <Grid item xs={6}>
          <h1>Areas</h1>
          <AreaForm
            handleAddArea={handleAddArea}
            cities={cities}
            onCityChange={handleCityChange}
            selectedCityID={selectedCityID}
            loadingAddArea={loadingAddArea}
          />
          <AreaList
            areas={areas}
            cities={cities}
            selectedCityID={selectedCityID}
            updateArea={updateArea}
            deleteArea={deleteArea}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Cities;
