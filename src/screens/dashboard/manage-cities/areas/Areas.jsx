import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../../../utils/db-config";
import AreaForm from "./AreaForm";
import AreaList from "./AreaList";

const ManageCities = ({
  areas,
  setAreas,
  cities,
  selectedCityID,
  setSelectedCityID,
}) => {
  // State variables
  const [loadingAddArea, setLoadingAddArea] = useState(false);

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

  const updateArea = (id, newValues) => {
    setAreas(
      areas.map((area) => (area.id === id ? { ...area, ...newValues } : area))
    );
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
    <>
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
        selectedCityID={selectedCityID}
        updateArea={updateArea}
        deleteArea={deleteArea}
      />
    </>
  );
};

export default ManageCities;
