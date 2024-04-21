import axios from "axios";
import { BASE_URL } from "../../../../utils/db-config";

export const fetchAreas = async (cityID, setAreas) => {
  setAreas([]);
  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/areaList`,
      { cityID: cityID },
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    setAreas(response.data);
  } catch (error) {
    console.error(`Error fetching areas: ${error.message}`);
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
      `${BASE_URL}/api/admin/addArea`,
      {
        cityID: parseInt(values.city),
        areaName: values.area,
      },
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    if (response.status === 200) {
      const newArea = {
        id: response.data.id,
        cityid: response.data.cityid,
        areaname: response.data.areaname,
      };
      setAreas([...areas, newArea]); // Add new area to the already fetched areas
    } else {
      throw new Error("Failed to add area");
    }
  } catch (error) {
    console.error(`Error adding area: ${error.message}`);
  } finally {
    setLoadingAddArea(false);
  }
};
