import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { object, string } from "yup";
import { ThemeContext } from "../../../utils/ThemeContext";

const cityValidationSchema = object({
  city: string().required("City is required").trim(),
});

const areaValidationSchema = object({
  area: string().required("Area is required").trim(),
  city: string().required("City is required"),
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const { theme } = useContext(ThemeContext);

  const handleAddCity = (values, { resetForm }) => {
    setCities([...cities, values.city]);
    resetForm();
  };

  const handleAddArea = (values, { resetForm }) => {
    setAreas([...areas, { area: values.area, city: values.city }]);
    resetForm();
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Cities
          </Typography>
          <Formik
            initialValues={{ city: "" }}
            validationSchema={cityValidationSchema}
            onSubmit={handleAddCity}
          >
            {({ touched, errors }) => (
              <Form>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={8}>
                    <Field
                      as={TextField}
                      name="city"
                      fullWidth
                      label="City"
                      error={Boolean(touched.city && errors.city)}
                      helperText={touched.city && errors.city}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button type="submit" fullWidth>
                      Add City
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
          {cities.map((city, index) => (
            <Grid
              container
              justifyContent="space-between"
              key={index}
              sx={{ mt: 2, width: "70%" }}
            >
              <Typography>{city}</Typography>
              <div>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Areas
          </Typography>
          <Formik
            initialValues={{ area: "", city: "" }}
            validationSchema={areaValidationSchema}
            onSubmit={handleAddArea}
          >
            {({ values, handleChange, touched, errors }) => (
              <Form>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={4}>
                    <Field
                      as={TextField}
                      name="area"
                      fullWidth
                      label="Area"
                      error={Boolean(touched.area && errors.area)}
                      helperText={touched.area && errors.area}
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
                        label="City"
                        error={Boolean(touched.city && errors.city)}
                        helperText={touched.city && errors.city}
                      >
                        {cities.map((city, index) => (
                          <MenuItem key={index} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Button type="submit" fullWidth>
                      Add Area
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
          {areas.map((area, index) => (
            <Grid
              container
              justifyContent="space-between"
              key={index}
              sx={{ mt: 2, width: "70%" }}
            >
              <Typography>
                {area.area} ({area.city})
              </Typography>
              <div>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Cities;
