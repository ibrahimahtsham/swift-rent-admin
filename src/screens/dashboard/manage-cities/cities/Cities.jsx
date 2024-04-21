import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../../utils/db-config";
import CityForm from "./CityForm";
import CityList from "./CityList";

const Cities = ({ cities, setCities, selectedCityID, setSelectedCityID }) => {
  // State variables
  const [loadingAddCity, setLoadingAddCity] = useState(false);

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

  // Handlers for city and area updates and deletions
  const updateCity = (id, newCity) => {
    const updatedCity = cities.map(
      (city) => (city.id === id ? { ...city, ...newCity } : city) // Update city if id matches
    );
    setCities(updatedCity);
  };

  const deleteCity = (id) => {
    const updatedCities = cities.filter((city) => city.id !== id); // Remove city if id matches
    setCities(updatedCities);
  };

  return (
    <>
      <h1>Cities</h1>
      <CityForm handleAddCity={handleAddCity} loadingAddCity={loadingAddCity} />
      <CityList
        cities={cities}
        updateCity={updateCity}
        deleteCity={deleteCity}
        selectedCityID={selectedCityID}
        setSelectedCityID={setSelectedCityID}
      />
    </>
  );
};

export default Cities;
