import * as Yup from "yup";

export const editPropertySchema = Yup.object().shape({
  ownerName: Yup.string().required("Owner Name is required"),
  tenantName: Yup.string().required("Tenant Name is required"),
  managerName: Yup.string().required("Manager Name is required"),
  address: Yup.string().required("Address is required"),
  propertyStatus: Yup.string().required("Property Status is required"),
});
