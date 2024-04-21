import { FormControl, Grid, MenuItem, TextField, Tooltip } from "@mui/material";
import { Field, Form, Formik } from "formik";
import FormButton from "../../../../components/common/FormButton";
import LoadingSpinner from "../../../../components/common/LoadingSpinner";
import { icons } from "../../../../utils/ImageImports";
import { addAreaValidationSchema } from "../../../../utils/validation/AddAreaValidation";

const AreaForm = ({
  handleAddArea,
  cities,
  onCityChange,
  selectedCityID,
  loadingAddArea,
}) => {
  return (
    <Formik
      initialValues={{
        area: "",
        city: "",
      }}
      validationSchema={addAreaValidationSchema}
      onSubmit={(values) => {
        handleAddArea(values); // Send area data to be added via api
        values.area = ""; // Reset areas value after area has been added
        values.city = values.city; // Keep city value to what it was after area has been added
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
                  value={selectedCityID === null ? "" : values.city} // When the city is deleted from the list, reset the city value in the add area dropdown
                  onChange={(e) => {
                    handleChange(e);
                    onCityChange(e);
                  }}
                  label="Select City"
                  error={Boolean(touched.city && errors.city)}
                  helperText={touched.city && errors.city}
                  required
                >
                  {Array.isArray(cities) && cities.length > 0 ? ( // Check if cities array is not empty
                    cities.map((city) => (
                      <MenuItem key={city.id} value={city.id}>
                        {city.cityname}
                      </MenuItem>
                    ))
                  ) : (
                    // If cities array is empty, show disabled menu item
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
                {loadingAddArea ? ( // Show loading spinner when adding area
                  <LoadingSpinner />
                ) : (
                  // Show add icon when not adding area
                  <img src={icons.addIcon} alt="Add" />
                )}
              </FormButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AreaForm;
