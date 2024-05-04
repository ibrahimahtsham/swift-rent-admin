import axios from "axios";
import { BASE_URL } from "../../../utils/db-config";
import { handleApiError, headers } from "../../../utils/helpers";

export async function updatePropertyStatusData() {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/admin/sunburst-analytics`,
      { headers }
    );
    return response.data;
  } catch (error) {
    alert(handleApiError(error));
  }
}
