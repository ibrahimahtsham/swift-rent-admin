import axios from "axios";
import { BASE_URL } from "../../../../utils/db-config";

export const fetchCities = async (setCities) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/admin/cityList`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    setCities(response.data);
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
};

export const handleAddCity = async (
  values,
  { resetForm },
  cities,
  setCities,
  setLoadingAddCity
) => {
  setLoadingAddCity(true);
  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/addCity`,
      { cityName: values.city },
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    if (response.status === 200) {
      const newCity = {
        id: response.data.id,
        cityname: response.data.cityname,
      };
      setCities([...cities, newCity]);
      resetForm();
    } else {
      throw new Error("Failed to add city");
    }
  } catch (error) {
    console.error(`Error adding city: ${error.message}`);
  } finally {
    setLoadingAddCity(false);
  }
};
