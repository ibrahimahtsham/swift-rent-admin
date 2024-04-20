import {
  FormControl,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import FormButton from "../../../components/common/FormButton";
import { icons } from "../../../utils/ImageImports";
import { addAreaValidationSchema } from "../../../utils/validation/AddAreaValidation";

const AreaList = ({ areas, cities, updateArea }) => {
  const [editingAreaId, setEditingAreaId] = useState(null);

  const handleEditClick = (areaId) => {
    setEditingAreaId(areaId);
  };

  const handleDeleteClick = (areaId) => {
    console.log(areaId);
  };

  return (
    <>
      {areas.map((area, index) => (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          key={index}
          sx={{ mt: 2, width: "100%" }}
        >
          {editingAreaId === area.id ? (
            <Formik
              initialValues={{ area: area.area, city: area.city }}
              validationSchema={addAreaValidationSchema}
              onSubmit={(values) => {
                console.log(area.id, values.area, values.city);
                updateArea(area.id, values);
                setEditingAreaId(null);
              }}
            >
              {({ touched, errors, handleSubmit, handleChange, values }) => (
                <>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
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
                      <FormControl fullWidth>
                        <Field
                          as={TextField}
                          select
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          label="Select City"
                          error={Boolean(touched.city && errors.city)}
                          helperText={touched.city && errors.city}
                          required
                        >
                          {cities.map((city, index) => (
                            <MenuItem key={index} value={city.city}>
                              {city.city}
                            </MenuItem>
                          ))}
                        </Field>
                      </FormControl>
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
                          onClick={() => handleDeleteClick(area.id)}
                        >
                          <img src={icons.deleteIcon} alt="Delete" />
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
                  {area.id} {area.area} (
                  {cities.find((city) => city.id === area.cityID)?.city})
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <FormButton
                    aria-label="Edit"
                    style={{ marginRight: "10px" }}
                    onClick={() => handleEditClick(area.id)}
                  >
                    <img src={icons.editIcon} alt="Edit" />
                  </FormButton>
                  <FormButton
                    aria-label="Delete"
                    bgcolor="#f44336"
                    onClick={() => handleDeleteClick(area.id)}
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

export default AreaList;
