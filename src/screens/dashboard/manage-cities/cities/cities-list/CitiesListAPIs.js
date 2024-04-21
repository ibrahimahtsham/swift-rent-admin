import axios from "axios";
import { BASE_URL } from "../../../../../utils/db-config";

export const handleDeleteCity = async (
  cityID,
  cityName,
  selectedCityID,
  setSelectedCityID,
  deleteCity,
  setLoadingDeleteCityID
) => {
  setLoadingDeleteCityID(cityID);
  const isConfirmed = window.confirm(
    `Are you sure you want to delete the city "${cityName}"?`
  );

  if (!isConfirmed) {
    setLoadingDeleteCityID(null);
    return;
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/deleteCity`,
      { cityID: cityID },
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    if (response.data.message === "City Deleted") {
      deleteCity(cityID);

      if (selectedCityID === cityID) {
        // Clear selected city ID from the add area dropdown if it is being deleted and is selected
        setSelectedCityID(null);
      }
    }
  } catch (error) {
    if (error.response.status === 400) {
      setLoadingDeleteCityID(null);
      alert(error.response.data.error);
    } else {
      console.error(`Error deleting city: ${error.message}`);
    }
  } finally {
    setLoadingDeleteCityID(null);
  }
};

export const handleUpdateCity = async (
  cityID,
  cityName,
  updateCity,
  setEditingCityID,
  setLoadingEditCityID
) => {
  setLoadingEditCityID(cityID);
  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/updateCity`,
      { cityID: cityID, cityName: cityName },
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    if (response.status === 200) {
      updateCity(cityID, { cityname: cityName });
      setEditingCityID(null);
    }
  } catch (error) {
    console.error(`Error updating city: ${error.message}`);
  } finally {
    setLoadingEditCityID(null);
  }
};
