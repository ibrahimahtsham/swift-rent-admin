import * as Yup from "yup";

export const editUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required"),
  lastName: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required"),
  dob: Yup.date().required("Required"),
  phone: Yup.string()
    .matches(
      /^03\d{9}$/,
      "Phone number must start with 03 and be 11 digits long"
    )
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required"),
});
