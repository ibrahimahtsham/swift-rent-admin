import { Button, FormControl, Grid, MenuItem, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { areaValidationSchema } from "./validationSchemas";

const AreaForm = ({ handleAddArea, cities }) => (
  <Formik
    initialValues={{ area: "", city: "" }}
    validationSchema={areaValidationSchema}
    onSubmit={handleAddArea}
  >
    {({ values, handleChange, touched, errors }) => (
      <Form>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={4}>
            <Field
              as={TextField}
              name="area"
              fullWidth
              label="Area"
              error={Boolean(touched.area && errors.area)}
              helperText={touched.area && errors.area}
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
                label="City"
                error={Boolean(touched.city && errors.city)}
                helperText={touched.city && errors.city}
              >
                {cities.map((city, index) => (
                  <MenuItem key={index} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button type="submit" fullWidth>
              Add Area
            </Button>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default AreaForm;
