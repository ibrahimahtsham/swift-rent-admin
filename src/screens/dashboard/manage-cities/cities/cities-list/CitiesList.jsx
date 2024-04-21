import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import FormButton from "../../../../../components/common/FormButton";
import LoadingSpinner from "../../../../../components/common/LoadingSpinner";
import { icons } from "../../../../../utils/ImageImports";
import { BASE_URL } from "../../../../../utils/db-config";
import CityEditListForm from "./CityEditListForm";

const CitiesList = ({
  cities,
  updateCity,
  deleteCity,
  selectedCityID,
  setSelectedCityID,
}) => {
  // State variables
  const [editingCityID, setEditingCityID] = useState(null);
  const [loadingEditCityID, setLoadingEditCityID] = useState(null);
  const [loadingDeleteCityID, setLoadingDeleteCityID] = useState(null);

  // Handle edit click
  const handleEditClick = (cityID) => {
    setEditingCityID(cityID);
  };

  // Handle delete city
  const handleDeleteClick = async (cityID, cityName) => {
    setLoadingDeleteCityID(cityID);
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the city "${cityName}"?`
    );

    if (!isConfirmed) {
      setLoadingDeleteCityID(null);
      return;
    }

    if (selectedCityID === cityID) {
      // Clear selected city ID from the add area dropdown if it is being deleted and is selected
      setSelectedCityID(null);
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

  return (
    <>
      {Array.isArray(cities) && cities.length > 0 ? ( // Check if cities array is not empty
        cities.map((city, index) => (
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            key={index}
            sx={{ mt: 2, width: "100%" }}
          >
            {editingCityID === city.id ? ( // Check if city row is being edited based on city ID
              <CityEditListForm
                city={city}
                updateCity={updateCity}
                setEditingCityID={setEditingCityID}
                handleDeleteClick={handleDeleteClick}
                loadingDeleteCityID={loadingDeleteCityID}
                loadingEditCityID={loadingEditCityID}
                setLoadingEditCityID={setLoadingEditCityID}
              />
            ) : (
              // Display city details if not being edited
              <>
                <Grid item xs={8}>
                  <Typography>
                    {"[ID:"}
                    {city.id}
                    {"] "}
                    {city.cityname}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <FormButton
                      aria-label="Edit"
                      style={{ marginRight: "10px" }}
                      onClick={() => handleEditClick(city.id)}
                    >
                      {loadingEditCityID === city.id ? ( // Show loading spinner if city is being edited
                        <LoadingSpinner />
                      ) : (
                        // Show edit icon if city is not being edited
                        <img src={icons.editIcon} alt="Edit" />
                      )}
                    </FormButton>
                    <FormButton
                      aria-label="Delete"
                      bgcolor="#f44336"
                      onClick={() => handleDeleteClick(city.id, city.cityname)}
                    >
                      {loadingDeleteCityID === city.id ? ( // Show loading spinner if city is being deleted
                        <LoadingSpinner />
                      ) : (
                        // Show delete icon if city is not being deleted
                        <img src={icons.deleteIcon} alt="Delete" />
                      )}
                    </FormButton>
                  </div>
                </Grid>
              </>
            )}
          </Grid>
        ))
      ) : (
        // Show loading spinner if cities array is empty
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Loading cities...
          <LoadingSpinner />
        </Typography>
      )}
    </>
  );
};

export default CitiesList;
