import { FormControl, Grid, MenuItem, TextField, Tooltip } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import FormButton from "../../../components/common/FormButton";
import { addAreaValidationSchema } from "../../../utils/validation/AddAreaValidation";

const AreaForm = ({ handleAddArea, cities, onCityChange }) => (
  <Formik
    initialValues={{ area: "", city: "" }}
    validationSchema={addAreaValidationSchema}
    onSubmit={handleAddArea}
  >
    {({ values, handleChange, touched, errors }) => (
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Tooltip title={!values.city ? "Please select city first" : ""}>
              <div>
                <Field
                  as={TextField}
                  name="area"
                  fullWidth
                  label="Area"
                  disabled={!values.city}
                  error={Boolean(touched.area && errors.area)}
                  helperText={touched.area && errors.area}
                  required
                />
              </div>
            </Tooltip>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <Field
                as={TextField}
                select
                name="city"
                value={values.city}
                onChange={(e) => {
                  handleChange(e);
                  onCityChange(e);
                }}
                label="Select City"
                error={Boolean(touched.city && errors.city)}
                helperText={touched.city && errors.city}
                required
              >
                {cities.map((city) => (
                  <MenuItem key={city.id} value={city.id}>
                    {city.city}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormButton type="submit" fullWidth>
              Add Area
            </FormButton>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default AreaForm;
