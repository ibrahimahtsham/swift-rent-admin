export function updatePropertyStatusData(data) {
  const updatedChildren = data.children.map((city) => {
    const updatedCityChildren = city.children.map((propertyStatus) => {
      if (city.id === "Rawalpindi") {
        if (propertyStatus.id === "Vacant") {
          return { ...propertyStatus, value: 3 };
        }
        if (propertyStatus.id === "Occupied") {
          return { ...propertyStatus, value: 4 };
        }
      }

      if (city.id === "Islamabad") {
        if (propertyStatus.id === "Vacant") {
          return { ...propertyStatus, value: 5 };
        }
        if (propertyStatus.id === "Occupied") {
          return { ...propertyStatus, value: 6 };
        }
      }

      return propertyStatus;
    });

    return {
      ...city,
      children: updatedCityChildren,
    };
  });

  return { ...data, children: updatedChildren };
}
