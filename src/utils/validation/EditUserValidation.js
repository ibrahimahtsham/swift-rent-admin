import * as Yup from "yup";

export const editUserSchema = Yup.object().shape({
  firstname: Yup.string()
    .matches(/^[^\s].*[^\s]$/, "No trailing spaces allowed")
    .matches(/^[^0-9]*$/, "No numbers allowed")
    .required("Required"),
  lastname: Yup.string()
    .matches(/^[^\s].*[^\s]$/, "No trailing spaces allowed")
    .matches(/^[^0-9]*$/, "No numbers allowed")
    .required("Required"),
  //dob must be in format yyyy-mm-dd and check for age between 18 and 110
  dob: Yup.string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Date of birth must be in format yyyy-mm-dd"
    )
    .test("age", "User must be between 18 and 110 years old", (value) => {
      const dob = new Date(value);
      const age = new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970;
      return age >= 18 && age <= 110;
    })
    .required("Required"),
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
