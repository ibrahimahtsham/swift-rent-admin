import { Button, Grid, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { cityValidationSchema } from "./validationSchemas";

const CityForm = ({ handleAddCity }) => (
  <Formik
    initialValues={{ city: "" }}
    validationSchema={cityValidationSchema}
    onSubmit={handleAddCity}
  >
    {({ touched, errors }) => (
      <Form>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8}>
            <Field
              as={TextField}
              name="city"
              fullWidth
              label="City"
              error={Boolean(touched.city && errors.city)}
              helperText={touched.city && errors.city}
            />
          </Grid>
          <Grid item xs={4}>
            <Button type="submit" fullWidth>
              Add City
            </Button>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default CityForm;
