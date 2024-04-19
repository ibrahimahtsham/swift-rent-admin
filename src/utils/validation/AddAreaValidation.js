import * as Yup from "yup";

export const addAreaValidationSchema = Yup.object().shape({
  area: Yup.string()
    .required("Area is required")
    .matches(/^[^\s].*[^\s]$/, "No white spaces at the start or end")
    .matches(/^(?!.*\s\s).*$/, "No double spaces"),
  city: Yup.string()
    .required("City is required")
    .matches(/^\S*$/, "No white spaces"),
});
