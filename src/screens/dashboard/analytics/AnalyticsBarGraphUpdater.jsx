import axios from "axios";
import { BASE_URL } from "../../../utils/db-config";
import { handleApiError, headers } from "../../../utils/helpers";

export async function updatePropertyTypesPerCityData() {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/admin/h-s-bar-graph-analytics`,
      { headers }
    );
    return response.data;
  } catch (error) {
    alert(handleApiError(error));
  }
}

export function updatePasswordResetResponseTimeData() {
  return [
    { x: "Feb 24", value: 13 },
    { x: "Mar 24", value: 12 },
    { x: "Apr 24", value: 21 },
    { x: "May 24", value: 3 },
    { x: "Jun 24", value: 1 },
    { x: "Jul 24", value: 32 },
    { x: "Aug 24", value: 15 },
    { x: "Sep 24", value: 5 },
    { x: "Oct 24", value: 12 },
    { x: "Nov 24", value: 16 },
    { x: "Dec 24", value: 24 },
    { x: "Jan 25", value: 7 },
  ];
}

export function updateManagerHireResponseTimeData() {
  return [
    { x: "Feb 24", value: 13 },
    { x: "Mar 24", value: 12 },
    { x: "Apr 24", value: 21 },
    { x: "May 24", value: 3 },
    { x: "Jun 24", value: 1 },
    { x: "Jul 24", value: 32 },
    { x: "Aug 24", value: 15 },
    { x: "Sep 24", value: 5 },
    { x: "Oct 24", value: 12 },
    { x: "Nov 24", value: 16 },
    { x: "Dec 24", value: 24 },
    { x: "Jan 25", value: 7 },
  ];
}
