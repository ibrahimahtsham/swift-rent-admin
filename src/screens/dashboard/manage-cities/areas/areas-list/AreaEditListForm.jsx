import { CircularProgress, Grid, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import FormButton from "../../../../../components/common/FormButton";
import { icons } from "../../../../../utils/ImageImports";
import { addAreaValidationSchema } from "../../../../../utils/validation/AddAreaValidation";
import { handleUpdateArea } from "./AreasListAPIs";

const AreaEditListForm = ({
  area,
  updateArea,
  handleDeleteArea,
  setEditingAreaID,
  loadingEditAreaID,
  setLoadingEditAreaID,
  loadingDeleteAreaID,
}) => {
  return (
    <Formik
      initialValues={{
        area: area.areaname,
        city: area.cityid.toString(),
      }}
      validationSchema={addAreaValidationSchema}
      onSubmit={(values) => {
        handleUpdateArea(
          area.id,
          values.area,
          updateArea,
          setEditingAreaID,
          setLoadingEditAreaID
        );
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
