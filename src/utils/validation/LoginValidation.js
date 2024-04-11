import * as Yup from "yup";

export const loginValidation = Yup.object({
  username: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be 8 characters or more")
    .required("Required"),
});
