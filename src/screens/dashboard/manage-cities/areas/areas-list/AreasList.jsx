import { CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FormButton from "../../../../../components/common/FormButton";
import { icons } from "../../../../../utils/ImageImports";
import AreaEditListForm from "./AreaEditListForm";
import { handleDeleteArea } from "./AreasListAPIs";

const AreasList = ({ areas, selectedCityID, updateArea, deleteArea }) => {
  // State variables
  const [editingAreaID, setEditingAreaID] = useState(null); // State variable to store the area id that is being edited
  const [loadingEditAreaID, setLoadingEditAreaID] = useState(null); // State variable to store the area id that is being loaded for editing
  const [loadingDeleteAreaID, setLoadingDeleteAreaID] = useState(null); // State variable to store the area id that is being loaded for deletion
  const [loading, setLoading] = useState(true); // State variable to store the loading state for the whole areas list

  // Handle edit click
  const handleEditClick = (areaID) => {
    setEditingAreaID(areaID);
  };

  // Handle delete area
  const handleDeleteClick = (areaID, areaName) => {
    handleDeleteArea(areaID, areaName, deleteArea, setLoadingDeleteAreaID);
  };

  // useEffect to handle loading state
  useEffect(() => {
    setLoading(true); // Set loading state to true when the areas list is empty
    if (Array.isArray(areas) && areas.length > 0) {
      // Check if areas array is not empty
      setLoading(false); // Set loading state to false when the areas list is fetched
    } else if (Array.isArray(areas) && areas.length === 0) {
      // Check if areas array is empty
      const timer = setTimeout(() => {
        // start a timer to set loading state to false after 8 seconds if the areas list isnt fetched from the api
        setLoading(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [selectedCityID, areas]); // Run the useEffect when the selected city id or areas list changes
  // the selectedCityID should re run the useEffect when it changes to fetch the areas list for the selected city
  // the areas list should re run the useEffect when it changes to set the loading state to false when the areas list is fetched

  return (
    <>
      {selectedCityID === null ? ( // Check if a city is selected
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Select a city to view its areas
        </Typography>
      ) : loading ? ( // Check if the areas list is loading
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Loading areas...
          <CircularProgress style={{ marginLeft: "10px" }} size={20} />
        </Typography>
      ) : Array.isArray(areas) && areas.length > 0 ? ( // Check if areas array is not empty
        areas.map((area, index) => (
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            key={index}
            sx={{ mt: 2, width: "100%" }}
          >
            {editingAreaID === area.id ? ( // Check if area row is being edited based on area ID
              <AreaEditListForm
                area={area}
                updateArea={updateArea}
                handleDeleteArea={handleDeleteArea}
                setEditingAreaID={setEditingAreaID}
                loadingEditAreaID={loadingEditAreaID}
                setLoadingEditAreaID={setLoadingEditAreaID}
                loadingDeleteAreaID={loadingDeleteAreaID}
              />
            ) : (
              // Display area details if not being edited
              <>
                <Grid item xs={8}>
                  <Typography>
                    {"[ID:"}
                    {area.id}
                    {"] "}
                    {area.areaname}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <FormButton
                      aria-label="Edit"
                      style={{ marginRight: "10px" }}
                      onClick={() => handleEditClick(area.id)}
                    >
                      {loadingEditAreaID === area.id ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <img src={icons.editIcon} alt="Edit" />
                      )}
                    </FormButton>
                    <FormButton
                      aria-label="Delete"
                      bgcolor="#f44336"
                      onClick={() => handleDeleteClick(area.id, area.areaname)}
                    >
                      {loadingDeleteAreaID === area.id ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
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
        // If areas array is empty, show no areas available message
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          No areas available for the selected city
        </Typography>
      )}
    </>
  );
};

export default AreasList;
