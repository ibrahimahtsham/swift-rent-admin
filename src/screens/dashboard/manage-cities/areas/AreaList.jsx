import { CircularProgress, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import FormButton from "../../../../components/common/FormButton";
import { icons } from "../../../../utils/ImageImports";
import { BASE_URL } from "../../../../utils/db-config";
import { addAreaValidationSchema } from "../../../../utils/validation/AddAreaValidation";

const AreaList = ({ areas, selectedCityID, updateArea, deleteArea }) => {
  // State variables
  const [editingAreaID, setEditingAreaID] = useState(null); // State variable to store the area id that is being edited
  const [loadingEditAreaID, setLoadingEditAreaID] = useState(null); // State variable to store the area id that is being loaded for editing
  const [loadingDeleteAreaID, setLoadingDeleteAreaID] = useState(null); // State variable to store the area id that is being loaded for deletion
  const [loading, setLoading] = useState(true); // State variable to store the loading state for the whole areas list

  // Handle edit click
  const handleEditClick = (areaID) => {
    setEditingAreaID(areaID); // Set the editing area id to the area id that is being edited
  };

  // Handle update area
  const handleUpdateArea = async (areaID, areaName) => {
    setLoadingEditAreaID(areaID);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/updateArea`,
        { areaID: areaID, areaName: areaName },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.status === 200) {
        updateArea(areaID, { areaname: areaName }); // Update the area name in the areas list state
        setEditingAreaID(null); // Reset the editing area id after the area has been updated
      }
    } catch (error) {
      console.error(`Error updating area: ${error.message}`);
    } finally {
      setLoadingEditAreaID(null);
    }
  };

  // Handle delete area
  const handleDeleteArea = async (areaID, areaName) => {
    setLoadingDeleteAreaID(areaID);
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the area "${areaName}"?`
    );

    if (!isConfirmed) {
      setLoadingDeleteAreaID(null); // Reset the loading state if the deletion is not confirmed
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/deleteArea`,
        { areaID: areaID },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.data.message === "Area Deleted") {
        deleteArea(areaID); // Delete the area from the areas list state
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error(`Error deleting area: ${error.message}`);
    } finally {
      setLoadingDeleteAreaID(null);
    }
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
              <Formik
                initialValues={{
                  area: area.areaname,
                  city: area.cityid.toString(),
                }}
                validationSchema={addAreaValidationSchema}
                onSubmit={(values) => {
                  handleUpdateArea(area.id, values.area);
                }}
              >
                {({ touched, errors, handleSubmit }) => (
                  <>
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="area"
                          fullWidth
                          label="Area"
                          error={Boolean(touched.area && errors.area)}
                          helperText={touched.area && errors.area}
                          required
                        />
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
                            bgcolor="#00bf63"
                            sx={{ mr: 1 }}
                            onClick={handleSubmit}
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
                            onClick={() =>
                              handleDeleteArea(area.id, area.areaname)
                            }
                          >
                            {loadingDeleteAreaID === area.id ? (
                              <CircularProgress size={20} color="inherit" />
                            ) : (
                              <img src={icons.deleteIcon} alt="Delete" />
                            )}
                          </FormButton>
                        </div>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Formik>
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
                      onClick={() => handleDeleteArea(area.id, area.areaname)}
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

export default AreaList;
