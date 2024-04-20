import * as Yup from "yup";

export const addAreaValidationSchema = Yup.object().shape({
  area: Yup.string()
    .required("Area is required")
    .matches(/^[^\s].*[^\s]$/, "No white spaces at the start or end")
    .matches(/^(?!.*\s\s).*$/, "No double spaces"),

  city: Yup.number()
    .positive("City must be a positive number")
    .required("City is required"),
});
