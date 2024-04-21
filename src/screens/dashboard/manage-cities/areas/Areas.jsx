import { useState } from "react";
import AreaForm from "./AreaForm";
import { fetchAreas, handleAddArea } from "./AreasAPIs"; // import the functions
import AreasList from "./areas-list/AreasList";

const ManageCities = ({
  areas,
  setAreas,
  cities,
  selectedCityID,
  setSelectedCityID,
}) => {
  // State variables
  const [loadingAddArea, setLoadingAddArea] = useState(false);

  // Handle add area
  const addArea = (values) => {
    handleAddArea(values, areas, setAreas, setLoadingAddArea); // use the function
  };

  const updateArea = (id, newValues) => {
    setAreas(
      areas.map((area) => (area.id === id ? { ...area, ...newValues } : area)) // Update area if id matches
    );
  };

  const deleteArea = (id) => {
    const updatedAreas = areas.filter((area) => area.id !== id); // Remove area if id matches
    setAreas(updatedAreas);
  };

  // Handle city change to fetch areas so that the areas list is updated
  const handleCityChange = async (event) => {
    const cityID = parseInt(event.target.value);
    setSelectedCityID(cityID);
    await fetchAreas(cityID, setAreas); // use the function
  };

  return (
    <>
      <h1>Areas</h1>
      <AreaForm
        handleAddArea={addArea}
        cities={cities}
        onCityChange={handleCityChange}
        selectedCityID={selectedCityID}
        loadingAddArea={loadingAddArea}
      />
      <AreasList
        areas={areas}
        selectedCityID={selectedCityID}
        updateArea={updateArea}
        deleteArea={deleteArea}
      />
    </>
  );
};

export default ManageCities;
