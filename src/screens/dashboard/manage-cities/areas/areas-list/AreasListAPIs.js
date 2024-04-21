import axios from "axios";
import { BASE_URL } from "../../../../../utils/db-config";

export const handleDeleteArea = async (
  areaID,
  areaName,
  deleteArea,
  setLoadingDeleteAreaID
) => {
  setLoadingDeleteAreaID(areaID);
  const isConfirmed = window.confirm(
    `Are you sure you want to delete the area "${areaName}"?`
  );

  if (!isConfirmed) {
    setLoadingDeleteAreaID(null);
    return;
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/deleteArea`,
      { areaID: areaID },
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    if (response.data.message === "Area Deleted") {
      deleteArea(areaID);
    } else {
      console.error(response.data.error);
    }
  } catch (error) {
    console.error(`Error deleting area: ${error.message}`);
  } finally {
    setLoadingDeleteAreaID(null);
  }
};

export const handleUpdateArea = async (
  areaID,
  areaName,
  updateArea,
  setEditingAreaID,
  setLoadingEditAreaID
) => {
  setLoadingEditAreaID(areaID);
  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/updateArea`,
      { areaID: areaID, areaName: areaName },
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    if (response.status === 200) {
      updateArea(areaID, { areaname: areaName });
      setEditingAreaID(null);
    }
  } catch (error) {
    console.error(`Error updating area: ${error.message}`);
  } finally {
    setLoadingEditAreaID(null);
  }
};
