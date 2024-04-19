import { Grid, TextField, Typography } from "@mui/material";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import FormButton from "../../../components/common/FormButton";
import { icons } from "../../../utils/ImageImports";
import { addCityValidationSchema } from "../../../utils/validation/AddCityValidation";

const CityList = ({ cities, updateCity }) => {
  const [editingCityId, setEditingCityId] = useState(null);

  const handleEditClick = (cityId) => {
    setEditingCityId(cityId);
  };

  const handleDeleteClick = (cityId) => {
    console.log(cityId);
  };

  return (
    <>
      {cities.map((city, index) => (
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
              initialValues={{ city: city.city }}
              validationSchema={addCityValidationSchema}
              onSubmit={(values) => {
                // handle submit
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
                        sx={{ mr: 1 }} // use the Box component for margin instead of CSS styles
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
                <Typography>{city.city}</Typography>
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
      ))}
    </>
  );
};

export default CityList;
