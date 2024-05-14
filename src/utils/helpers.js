import { md5 } from "js-md5";

export const handleApiError = (error) => {
  console.log("Error: ", error);
  // Check if error response exists
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response.data && error.response.data.error) {
      // If error message exists in response data
      return error.response.data.error;
    } else {
      // If error message doesn't exist in response data
      return error.message;
    }
  } else if (error.request) {
    // The request was made but no response was received
    return "No response received from server.";
  } else {
    // Something happened in setting up the request that triggered an Error
    return error.message;
  }
};

export const headers = {
  "ngrok-skip-browser-warning": "true",
};

export function hashPassword(password) {
  let hashedPassword = password + "swiftrentmobilesalt";
  let salt_rounds = 10;
  for (let i = 0; i < salt_rounds; i++) {
    hashedPassword = md5(hashedPassword);
  }
  return hashedPassword;
}
