import axios from "axios";
import { BASE_URL } from "../../../utils/db-config";
import { handleApiError, hashPassword, headers } from "../../../utils/helpers";

export const fetchUsers = async (setLoading, setRows) => {
  setLoading(true);
  try {
    const response = await axios.get(`${BASE_URL}/api/admin/user-list`, {
      headers,
    });
    const users = response.data.users.map((user) => ({
      ...user,
      dob: user.dob.split("-").reverse().join("-"),
    }));
    setRows(users);
    setLoading(false);
  } catch (error) {
    alert(handleApiError(error));
    setLoading(false);
  }
};

export const editUser = async (
  userData,
  setOpenEditingPopup,
  setLoading,
  fetchUsers,
  setRows
) => {
  try {
    setOpenEditingPopup(false);
    const response = await axios.post(
      `${BASE_URL}/api/admin/edit-user`,
      {
        userID: userData.id,
        firstName: userData.firstname,
        lastName: userData.lastname,
        dob: userData.dob,
        email: userData.email,
        phone: userData.phone,
        isOwner: userData.isowner,
        isManager: userData.ismanager,
        isTenant: userData.istenant,
      },
      {
        headers,
      }
    );
    fetchUsers(setLoading, setRows);
    return response.data;
  } catch (error) {
    alert(handleApiError(error));
    setLoading(false);
  }
};

export const resetPassword = async (
  userData,
  setOpenResetPasswordPopup,
  setLoading,
  fetchUsers,
  setRows
) => {
  try {
    setOpenResetPasswordPopup(false);
    const response = await axios.post(
      `${BASE_URL}/api/admin/reset-password`,
      {
        userID: userData.id,
        userPassword: hashPassword(userData.password),
      },
      {
        headers,
      }
    );
    fetchUsers(setLoading, setRows);
    alert(response.data.message);
    return response.data;
  } catch (error) {
    alert(handleApiError(error));
    setLoading(false);
  }
};

export const banUser = async (userID, setRows, setLoading) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/ban-user`,
      {
        userID,
      },
      {
        headers,
      }
    );
    alert(response.data.message);
    fetchUsers(setLoading, setRows);
    return response.data;
  } catch (error) {
    alert(handleApiError(error));
  }
};

export const unbanUser = async (userID, setRows, setLoading) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/un-ban-user`,
      {
        userID,
      },
      {
        headers,
      }
    );
    alert(response.data.message);
    fetchUsers(setLoading, setRows);
    return response.data;
  } catch (error) {
    alert(handleApiError(error));
  }
};
