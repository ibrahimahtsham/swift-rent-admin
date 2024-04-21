import { Grid, TextField } from "@mui/material";
import axios from "axios";
import { Field, Formik } from "formik";
import FormButton from "../../../../../components/common/FormButton";
import LoadingSpinner from "../../../../../components/common/LoadingSpinner";
import { icons } from "../../../../../utils/ImageImports";
import { BASE_URL } from "../../../../../utils/db-config";
import { addCityValidationSchema } from "../../../../../utils/validation/AddCityValidation";

const CityEditListForm = ({
  city,
  updateCity,
  setEditingCityID,
  handleDeleteClick,
  loadingDeleteCityID,
  loadingEditCityID,
  setLoadingEditCityID,
}) => {
  // Handle update city
  const handleUpdateCity = async (cityID, cityName) => {
    setLoadingEditCityID(cityID);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/updateCity`,
        { cityID: cityID, cityName: cityName },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.status === 200) {
        updateCity(cityID, { cityname: cityName });
        setEditingCityID(null);
      }
    } catch (error) {
      console.error(`Error updating city: ${error.message}`);
    } finally {
      setLoadingEditCityID(null);
    }
  };
  return (
    <Formik
      initialValues={{ city: city.cityname }}
      validationSchema={addCityValidationSchema}
      onSubmit={(values) => {
        handleUpdateCity(city.id, values.city);
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
