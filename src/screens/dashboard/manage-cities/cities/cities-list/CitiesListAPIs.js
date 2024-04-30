import axios from "axios";
import { BASE_URL } from "../../../../../utils/db-config";
import { headers } from "../../../../../utils/helpers";

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
        headers,
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
    alert(`Error deleting city: ${handleApiError(error)}`);
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
        headers,
      }
    );

    if (response.status === 200) {
      updateCity(cityID, { cityname: cityName });
      setEditingCityID(null);
    }
  } catch (error) {
    alert(`Error updating city: ${handleApiError(error)}`);
  } finally {
    setLoadingEditCityID(null);
  }
};
