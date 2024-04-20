import { Grid, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import FormButton from "../../../components/common/FormButton";
import { icons } from "../../../utils/ImageImports";
import { addCityValidationSchema } from "../../../utils/validation/AddCityValidation";

const CityForm = ({ handleAddCity }) => (
  <Formik
    initialValues={{ city: "" }}
    validationSchema={addCityValidationSchema}
    onSubmit={handleAddCity}
  >
    {({ touched, errors, isValid, values }) => (
      <Form>
        <Grid container spacing={2}>
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
            <FormButton
              type="submit"
              variant="contained"
              aria-label="Add City"
              bgcolor={isValid && values.city !== "" ? "#00bf63" : undefined}
            >
              <img src={icons.addIcon} alt="Add" />
            </FormButton>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default CityForm;
