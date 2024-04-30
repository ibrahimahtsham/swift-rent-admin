import axios from "axios";
import { BASE_URL } from "../../../../utils/db-config";
import { handleApiError, headers } from "../../../../utils/helpers";

export const fetchCities = async (setCities) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/admin/cityList`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    setCities(response.data);
  } catch (error) {
    alert(`Error fetching cities: ${handleApiError(error)}`);
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
        headers,
      }
    );

    if (response.status === 200) {
      const newCity = {
        id: response.data.id,
        cityname: response.data.cityname,
      };
      setCities([...cities, newCity]);
      resetForm();
    }
  } catch (error) {
    alert(`Error adding city: ${handleApiError(error)}`);
  } finally {
    setLoadingAddCity(false);
  }
};
