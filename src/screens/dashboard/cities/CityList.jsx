import { CircularProgress, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import FormButton from "../../../components/common/FormButton";
import { icons } from "../../../utils/ImageImports";
import { BASE_URL } from "../../../utils/db-config";
import { addCityValidationSchema } from "../../../utils/validation/AddCityValidation";

const CityList = ({ cities, updateCity }) => {
  const [editingCityId, setEditingCityId] = useState(null);

  const handleEditClick = (cityId) => {
    setEditingCityId(cityId);
  };

  const handleDeleteClick = async (cityId) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/deleteCity`,
        { cityID: cityId },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.data.message === "City Deleted") {
        const updatedCities = cities.filter((city) => city.id !== cityId);
        updateCity(cityId, { cityname: "" }); // Update with empty cityname to re-render the component
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error(`Error deleting city: ${error.message}`);
    }
  };

  return (
    <>
      {Array.isArray(cities) && cities.length > 0 ? (
        cities.map((city, index) => (
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            key={index}
            sx={{ mt: 2, width: "80%" }}
          >
            {editingCityId === city.id ? (
              <Formik
                initialValues={{ city: city.cityname }}
                validationSchema={addCityValidationSchema}
                onSubmit={(values) => {
                  console.log(city.id, values.city);
                  updateCity(city.id, values);
                  setEditingCityId(null);
                }}
              >
                {({ touched, errors, handleSubmit }) => (
                  <>
                    <Grid item xs={8}>
                      <Field
                        as={TextField}
                        name="city"
                        fullWidth
                        label="City"
                        error={Boolean(touched.city && errors.city)}
                        helperText={touched.city && errors.city}
                        required
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <FormButton
                          aria-label="Edit"
                          bgcolor="#00bf63"
                          sx={{ mr: 1 }}
                          onClick={handleSubmit}
                        >
                          <img src={icons.editIcon} alt="Edit" />
                        </FormButton>
                        <FormButton
                          aria-label="Delete"
                          bgcolor="#f44336"
                          onClick={() => handleDeleteClick(city.id)}
                        >
                          <img src={icons.deleteIcon} alt="Delete" />
                        </FormButton>
                      </div>
                    </Grid>
                  </>
                )}
              </Formik>
            ) : (
              <>
                <Grid item xs={8}>
                  <Typography>
                    {city.id} {city.cityname}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <FormButton
                      aria-label="Edit"
                      style={{ marginRight: "10px" }}
                      onClick={() => handleEditClick(city.id)}
                    >
                      <img src={icons.editIcon} alt="Edit" />
                    </FormButton>
                    <FormButton
                      aria-label="Delete"
                      bgcolor="#f44336"
                      onClick={() => handleDeleteClick(city.id)}
                    >
                      <img src={icons.deleteIcon} alt="Delete" />
                    </FormButton>
                  </div>
                </Grid>
              </>
            )}
          </Grid>
        ))
      ) : (
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Loading cities...
          <CircularProgress style={{ marginLeft: "10px" }} size={20} />
        </Typography>
      )}
    </>
  );
};

export default CityList;
