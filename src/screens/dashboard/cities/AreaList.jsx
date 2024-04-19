import {
  FormControl,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import FormButton from "../../../components/common/FormButton";
import { icons } from "../../../utils/ImageImports";

const validationSchema = Yup.object().shape({
  area: Yup.string().required("Area is required"),
  city: Yup.string().required("City is required"),
});

const AreaList = ({ areas, cities }) => {
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
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // handle submit
                console.log(area.id, values.area, values.city);
                setEditingAreaId(null);
              }}
            >
              {({ touched, errors, handleSubmit, handleChange, values }) => (
                <>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
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
                  {area.area} ({area.city})
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
