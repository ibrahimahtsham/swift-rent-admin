import axios from "axios";
import { BASE_URL } from "../../../utils/db-config";
import { handleApiError, headers } from "./../../../utils/helpers";

let updatedComplainsDataSolved = 0;
let updatedComplainsDataPending = 0;
let updatedComplainsDataRejected = 0;
let updatedComplainsDataInProgress = 0;

let updatedUserDataOwners = 0;
let updatedUserDataManagers = 0;
let updatedUserDataTenants = 0;

let updatedRentPaymentDataOnTime = 0;
let updatedRentPaymentDataLate = 0;

let updatedRentalsDataTenants = 10;
let updatedRentalsDataRentals = 11;

let updatedCityDataIslamabad = 14;
let updatedCityDataRawalpindi = 15;

let updatedManagerTypesDataPropertyManagers = 20;
let updatedManagerTypesDataTenantAcquirers = 21;

(async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/admin/pie-chart-analytics`,
      { headers }
    );

    updatedUserDataOwners = parseInt(response.data.usersAnalytics.NoOfOwners);
    updatedUserDataManagers = parseInt(
      response.data.usersAnalytics.NoOfManagers
    );
    updatedUserDataTenants = parseInt(response.data.usersAnalytics.NoOfTenants);

    updatedComplainsDataSolved = parseInt(
      response.data.complaintsAnalytics.NoOfSolved
    );
    updatedComplainsDataPending = parseInt(
      response.data.complaintsAnalytics.NoOfPending
    );
    updatedComplainsDataRejected = parseInt(
      response.data.complaintsAnalytics.NoOfRejected
    );
    updatedComplainsDataInProgress = parseInt(
      response.data.complaintsAnalytics.NoOfInProgress
    );

    updatedRentPaymentDataOnTime = parseInt(
      response.data.paymentsAnalytics.NoOfTimelyPayments
    );
    updatedRentPaymentDataLate = parseInt(
      response.data.paymentsAnalytics.NoOfLatePayments
    );
  } catch (error) {
    alert(handleApiError(error));
  }
})();

export function updateUserData(data) {
  return data.map((user) => {
    if (user.id === "Owners") {
      return { ...user, value: updatedUserDataOwners };
    }
    if (user.id === "Managers") {
      return { ...user, value: updatedUserDataManagers };
    }
    if (user.id === "Tenants") {
      return { ...user, value: updatedUserDataTenants };
    }
    return user;
  });
}

export function updateRentalsData(data) {
  return data.map((rental) => {
    if (rental.id === "Tenants") {
      return { ...rental, value: updatedRentalsDataTenants };
    }
    if (rental.id === "Rentals") {
      return { ...rental, value: updatedRentalsDataRentals };
    }
    return rental;
  });
}

export function updateRentPaymentData(data) {
  return data.map((rentPayment) => {
    if (rentPayment.id === "On Time") {
      return { ...rentPayment, value: updatedRentPaymentDataOnTime };
    }
    if (rentPayment.id === "Late") {
      return { ...rentPayment, value: updatedRentPaymentDataLate };
    }
    return rentPayment;
  });
}

export function updateCityData(data) {
  return data.map((city) => {
    if (city.id === "Islamabad") {
      return { ...city, value: updatedCityDataIslamabad };
    }
    if (city.id === "Rawalpindi") {
      return { ...city, value: updatedCityDataRawalpindi };
    }
    return city;
  });
}

export function updateComplainsData(data) {
  return data.map((complain) => {
    if (complain.id === "Solved") {
      return { ...complain, value: updatedComplainsDataSolved };
    }
    if (complain.id === "Pending") {
      return { ...complain, value: updatedComplainsDataPending };
    }
    if (complain.id === "Rejected") {
      return { ...complain, value: updatedComplainsDataRejected };
    }
    if (complain.id === "In Progress") {
      return { ...complain, value: updatedComplainsDataInProgress };
    }
    return complain;
  });
}

export function updateManagerTypesData(data) {
  return data.map((managerType) => {
    if (managerType.id === "Property Managers") {
      return { ...managerType, value: updatedManagerTypesDataPropertyManagers };
    }
    if (managerType.id === "Tenant Acquirers") {
      return { ...managerType, value: updatedManagerTypesDataTenantAcquirers };
    }
    return managerType;
  });
}
