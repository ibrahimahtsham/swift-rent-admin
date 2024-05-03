import { Grid, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import LoadingSpinner from "../../../../../components/common/LoadingSpinner";
import FormButton from "../../../../../components/common/buttons/FormButton";
import { icons } from "../../../../../utils/ImageImports";
import { addCityValidationSchema } from "../../../../../utils/validation/AddCityValidation";
import { handleUpdateCity } from "./CitiesListAPIs";

const CityEditListForm = ({
  city,
  updateCity,
  setEditingCityID,
  handleDeleteClick,
  loadingDeleteCityID,
  loadingEditCityID,
  setLoadingEditCityID,
}) => {
  return (
    <Formik
      initialValues={{ city: city.cityname }}
      validationSchema={addCityValidationSchema}
      onSubmit={(values) => {
        handleUpdateCity(
          city.id,
          values.city,
          updateCity,
          setEditingCityID,
          setLoadingEditCityID
        ); // use the function
      }}
    >
      {({ touched, errors, handleSubmit }) => (
        <>
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
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <FormButton
                aria-label="Edit"
                bgcolor="#00bf63"
                sx={{ mr: 1 }}
                onClick={handleSubmit}
              >
                {loadingEditCityID === city.id ? (
                  <LoadingSpinner />
                ) : (
                  <img src={icons.editIcon} alt="Edit" />
                )}
              </FormButton>
              <FormButton
                aria-label="Delete"
                bgcolor="#f44336"
                onClick={() => handleDeleteClick(city.id, city.cityname)}
              >
                {loadingDeleteCityID === city.id ? (
                  <LoadingSpinner />
                ) : (
                  <img src={icons.deleteIcon} alt="Delete" />
                )}
              </FormButton>
            </div>
          </Grid>
        </>
      )}
    </Formik>
  );
};

export default CityEditListForm;
