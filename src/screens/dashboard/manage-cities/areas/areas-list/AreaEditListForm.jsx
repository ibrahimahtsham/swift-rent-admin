import { CircularProgress, Grid, TextField } from "@mui/material";
import axios from "axios";
import { Field, Formik } from "formik";
import FormButton from "../../../../../components/common/FormButton";
import { icons } from "../../../../../utils/ImageImports";
import { BASE_URL } from "../../../../../utils/db-config";
import { addAreaValidationSchema } from "../../../../../utils/validation/AddAreaValidation";

const AreaEditListForm = ({
  area,
  updateArea,
  handleDeleteArea,
  setEditingAreaID,
  loadingEditAreaID,
  setLoadingEditAreaID,
  loadingDeleteAreaID,
}) => {
  // Handle update area
  const handleUpdateArea = async (areaID, areaName) => {
    setLoadingEditAreaID(areaID);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/updateArea`,
        { areaID: areaID, areaName: areaName },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.status === 200) {
        updateArea(areaID, { areaname: areaName }); // Update the area name in the areas list state
        setEditingAreaID(null); // Reset the editing area id after the area has been updated
      }
    } catch (error) {
      console.error(`Error updating area: ${error.message}`);
    } finally {
      setLoadingEditAreaID(null);
    }
  };

  return (
    <Formik
      initialValues={{
        area: area.areaname,
        city: area.cityid.toString(),
      }}
      validationSchema={addAreaValidationSchema}
      onSubmit={(values) => {
        handleUpdateArea(area.id, values.area);
      }}
    >
      {({ touched, errors, handleSubmit }) => (
        <>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Field
                as={TextField}
                name="area"
                fullWidth
                label="Area"
                error={Boolean(touched.area && errors.area)}
                helperText={touched.area && errors.area}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <FormButton
                  aria-label="Edit"
                  bgcolor="#00bf63"
                  sx={{ mr: 1 }}
                  onClick={handleSubmit}
                >
                  {loadingEditAreaID === area.id ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <img src={icons.editIcon} alt="Edit" />
                  )}
                </FormButton>
                <FormButton
                  aria-label="Delete"
                  bgcolor="#f44336"
                  onClick={() => handleDeleteArea(area.id, area.areaname)}
                >
                  {loadingDeleteAreaID === area.id ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <img src={icons.deleteIcon} alt="Delete" />
                  )}
                </FormButton>
              </div>
            </Grid>
          </Grid>
        </>
      )}
    </Formik>
  );
};

export default AreaEditListForm;
