import * as Yup from "yup";

export const addCityValidationSchema = Yup.object().shape({
  city: Yup.string()
    .required("City is required")
    .matches(/^\S*$/, "No white spaces are allowed"),
});
