import * as Yup from "yup";

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .matches(/^\S*$/, "No spaces allowed")
    .min(8, "Password must be at least 8 characters"),
});
