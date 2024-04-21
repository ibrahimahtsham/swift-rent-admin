import { useEffect, useState } from "react";
import { fetchCities, handleAddCity } from "./CitiesAPIs";
import CityForm from "./CityForm";
import CitiesList from "./cities-list/CitiesList";

const Cities = ({ cities, setCities, selectedCityID, setSelectedCityID }) => {
  // State variables
  const [loadingAddCity, setLoadingAddCity] = useState(false);

  // Fetch cities on component mount
  useEffect(() => {
    fetchCities(setCities);
  }, []);

  // Handlers for adding city and area
  const addCity = (values, formikBag) => {
    handleAddCity(values, formikBag, cities, setCities, setLoadingAddCity);
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
      <CityForm handleAddCity={addCity} loadingAddCity={loadingAddCity} />
      <CitiesList
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
