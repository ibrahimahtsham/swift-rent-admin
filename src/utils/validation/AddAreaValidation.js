import * as Yup from "yup";

export const addAreaValidationSchema = Yup.object().shape({
  area: Yup.string()
    .required("Area is required")
    .matches(/^\S*$/, "No white spaces are allowed"),
  city: Yup.string().required("City is required"),
});
