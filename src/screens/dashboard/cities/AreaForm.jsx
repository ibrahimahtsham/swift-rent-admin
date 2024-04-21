import { FormControl, Grid, MenuItem, TextField, Tooltip } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import FormButton from "../../../components/common/FormButton";
import { icons } from "../../../utils/ImageImports";
import { addAreaValidationSchema } from "../../../utils/validation/AddAreaValidation";

const AreaForm = ({ handleAddArea, cities, onCityChange, selectedCityId }) => {
  const renderCount = useRef(0);

  return (
    <Formik
      initialValues={{
        area: "",
        city: "",
      }}
      validationSchema={addAreaValidationSchema}
      onSubmit={(values) => {
        handleAddArea(values);
        values.area = "";
        values.city = values.city;
      }}
    >
      {({ values, handleChange, touched, errors, isValid }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={5}>
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
            <Grid item xs={5}>
              <FormControl fullWidth>
                <Field
                  as={TextField}
                  select
                  name="city"
                  value={selectedCityId === null ? "" : values.city}
                  onChange={(e) => {
                    handleChange(e);
                    onCityChange(e);
                  }}
                  label="Select City"
                  error={Boolean(touched.city && errors.city)}
                  helperText={touched.city && errors.city}
                  required
                >
                  {Array.isArray(cities) && cities.length > 0 ? (
                    cities.map((city) => (
                      <MenuItem key={city.id} value={city.id}>
                        {city.cityname}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="" disabled>
                      No cities available
                    </MenuItem>
                  )}
                </Field>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormButton
                type="submit"
                variant="contained"
                aria-label="Add City"
                bgcolor={isValid && values.area !== "" ? "#00bf63" : undefined}
              >
                <img src={icons.addIcon} alt="Add" />
              </FormButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AreaForm;
