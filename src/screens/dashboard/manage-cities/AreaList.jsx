import { CircularProgress, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import FormButton from "../../../components/common/FormButton";
import { icons } from "../../../utils/ImageImports";
import { BASE_URL } from "../../../utils/db-config";
import { addAreaValidationSchema } from "../../../utils/validation/AddAreaValidation";

const AreaList = ({ areas, selectedCityID, updateArea, deleteArea }) => {
  // State variables
  const [editingAreaID, setEditingAreaID] = useState(null);
  const [loadingEditAreaID, setLoadingEditAreaID] = useState(null);
  const [loadingDeleteAreaID, setLoadingDeleteAreaID] = useState(null);
  const [loading, setLoading] = useState(true);

  // Handle edit click
  const handleEditClick = (areaID) => {
    setEditingAreaID(areaID);
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
        updateArea(areaID, { areaname: areaName });
        setEditingAreaID(null);
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
      setLoadingDeleteAreaID(null);
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
        deleteArea(areaID);
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
    setLoading(true);
    if (Array.isArray(areas) && areas.length > 0) {
      setLoading(false);
    } else if (Array.isArray(areas) && areas.length === 0) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [selectedCityID, areas]);

  return (
    <>
      {selectedCityID === null ? (
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Select a city to view its areas
        </Typography>
      ) : loading ? (
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Loading areas...
          <CircularProgress style={{ marginLeft: "10px" }} size={20} />
        </Typography>
      ) : Array.isArray(areas) && areas.length > 0 ? (
        areas.map((area, index) => (
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            key={index}
            sx={{ mt: 2, width: "100%" }}
          >
            {editingAreaID === area.id ? (
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
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          No areas available for the selected city
        </Typography>
      )}
    </>
  );
};

export default AreaList;
