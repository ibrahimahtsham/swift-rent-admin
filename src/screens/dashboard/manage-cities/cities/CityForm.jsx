import { CircularProgress, Grid, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import FormButton from "../../../../components/common/FormButton";
import { icons } from "../../../../utils/ImageImports";
import { addCityValidationSchema } from "../../../../utils/validation/AddCityValidation";

const CityForm = ({ handleAddCity, loadingAddCity }) => (
  <Formik
    initialValues={{ city: "" }}
    validationSchema={addCityValidationSchema}
    onSubmit={handleAddCity}
  >
    {({ touched, errors, isValid, values }) => (
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={10}>
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
          <Grid item xs={2}>
            <FormButton
              type="submit"
              variant="contained"
              aria-label="Add City"
              bgcolor={isValid && values.city !== "" ? "#00bf63" : undefined}
            >
              {loadingAddCity ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <img src={icons.addIcon} alt="Add" />
              )}
            </FormButton>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default CityForm;
