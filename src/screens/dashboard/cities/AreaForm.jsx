import { FormControl, Grid, MenuItem, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormButton from "../../../components/common/FormButton";

export const areaValidationSchema = Yup.object().shape({
  area: Yup.string()
    .required("Area is required")
    .matches(/^\S*$/, "No white spaces are allowed"),
  city: Yup.string().required("City is required"),
});

const AreaForm = ({ handleAddArea, cities }) => (
  <Formik
    initialValues={{ area: "", city: "" }}
    validationSchema={areaValidationSchema}
    onSubmit={handleAddArea}
  >
    {({ values, handleChange, touched, errors }) => (
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={4}>
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
