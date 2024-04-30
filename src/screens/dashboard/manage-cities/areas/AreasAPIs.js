import axios from "axios";
import { BASE_URL } from "../../../../utils/db-config";
import { handleApiError, headers } from "../../../../utils/helpers";

export const fetchAreas = async (cityID, setAreas) => {
  setAreas([]);
  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/area-list`,
      { cityID: cityID },
      {
        headers,
      }
    );
    setAreas(response.data);
  } catch (error) {
    alert(`Error fetching areas: ${handleApiError(error)}`);
  }
};

export const handleAddArea = async (
  values,
  areas,
  setAreas,
  setLoadingAddArea
) => {
  setLoadingAddArea(true);
  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/add-area`,
      {
        cityID: parseInt(values.city),
        areaName: values.area,
      },
      {
        headers,
      }
    );

    if (response.status === 200) {
      const newArea = {
        id: response.data.id,
        cityid: response.data.cityid,
        areaname: response.data.areaname,
      };
      setAreas([...areas, newArea]); // Add new area to the already fetched areas
    }
  } catch (error) {
    alert(`Error adding area: ${handleApiError(error)}`);
  } finally {
    setLoadingAddArea(false);
  }
};
