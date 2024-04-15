import * as Yup from "yup";

export const editUserSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  dob: Yup.date().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  registeredOn: Yup.date().required("Required"),
});
