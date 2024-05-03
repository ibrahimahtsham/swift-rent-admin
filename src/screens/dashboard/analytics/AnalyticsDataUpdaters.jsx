export function updateUserData(data) {
  return data.map((user) => {
    if (user.id === "Owners") {
      return { ...user, value: 7 };
    }
    if (user.id === "Managers") {
      return { ...user, value: 8 };
    }
    if (user.id === "Tenants") {
      return { ...user, value: 9 };
    }
    return user;
  });
}

export function updateRentalsData(data) {
  return data.map((rental) => {
    if (rental.id === "Tenants") {
      return { ...rental, value: 10 };
    }
    if (rental.id === "Rentals") {
      return { ...rental, value: 11 };
    }
    return rental;
  });
}

export function updateRentPaymentData(data) {
  return data.map((rentPayment) => {
    if (rentPayment.id === "On-Time") {
      return { ...rentPayment, value: 12 };
    }
    if (rentPayment.id === "Late") {
      return { ...rentPayment, value: 13 };
    }
    return rentPayment;
  });
}

export function updateCityData(data) {
  return data.map((city) => {
    if (city.id === "Islamabad") {
      return { ...city, value: 14 };
    }
    if (city.id === "Rawalpindi") {
      return { ...city, value: 15 };
    }
    return city;
  });
}

export function updateComplainsData(data) {
  return data.map((complain) => {
    if (complain.id === "Solved") {
      return { ...complain, value: 16 };
    }
    if (complain.id === "Pending") {
      return { ...complain, value: 17 };
    }
    if (complain.id === "Rejected") {
      return { ...complain, value: 18 };
    }
    if (complain.id === "In Progress") {
      return { ...complain, value: 19 };
    }
    return complain;
  });
}

export function updateManagerTypesData(data) {
  return data.map((managerType) => {
    if (managerType.id === "Property Managers") {
      return { ...managerType, value: 20 };
    }
    if (managerType.id === "Tenant Acquirers") {
      return { ...managerType, value: 21 };
    }
    return managerType;
  });
}
