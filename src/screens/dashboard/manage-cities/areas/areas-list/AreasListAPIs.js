import axios from "axios";
import { BASE_URL } from "../../../../../utils/db-config";
import { handleApiError, headers } from "../../../../../utils/helpers";

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
        headers,
      }
    );

    if (response.data.message === "Area Deleted") {
      deleteArea(areaID);
    }
  } catch (error) {
    alert(`Error deleting area: ${handleApiError(error)}`);
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
        headers,
      }
    );

    if (response.status === 200) {
      updateArea(areaID, { areaname: areaName });
      setEditingAreaID(null);
    }
  } catch (error) {
    alert(`Error updating area: ${handleApiError(error)}`);
  } finally {
    setLoadingEditAreaID(null);
  }
};
