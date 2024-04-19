import { Grid, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormButton from "../../../components/common/FormButton";

export const cityValidationSchema = Yup.object().shape({
  city: Yup.string()
    .required("City is required")
    .matches(/^\S*$/, "No white spaces are allowed"),
});

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
              required
            />
          </Grid>
          <Grid item xs={4}>
            <FormButton type="submit" fullWidth>
              Add City
            </FormButton>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default CityForm;
