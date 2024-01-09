import { useState } from "react";
import "../../../assets/css/ResetPassPopup.css";
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";

const ResetPassPopup = (props) => {
  const [popup, setPopup] = useState(false);

  //popup open and close logic
  const togglePopup = () => {
    setPopup(!popup);
  };

  if (popup) {
    document.body.classList.add("active-popup");
  } else {
    document.body.classList.remove("active-popup");
  }

  //api

  //if user is not banned
  const handleResetPassword = async () => {
    try {
      const banUserResponse = await axios.post(`${BASE_URL}/admin/ban-user`, {
        userID: props.userID,
      });
      if (banUserResponse?.data) {
        setPopup(false);
      }
      const unBanUserResponse = await axios.post(`${BASE_URL}/admin/unban-user`, {
          userID: props.userID,
        }
      );
      if (unBanUserResponse?.data) {
        window.location.reload();
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div className="pop-up-body">
      <button className="button yellow-button fs-4" onClick={togglePopup}>
        Reset Password
      </button>

      {popup && (
        <div className="popup">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="popup-content w-25 p-5 text-center">
            <p className="fs-3">
              Are you sure you want to Reset the password for the user?
            </p>
            <p className="fs-3">{props.userName}</p>
            <button
              className="button yellow-button fs-1"
              onClick={handleResetPassword}
            >
              RESET
            </button>
            <button
              className="button blue-button close-popup mt-1 me-1"
              onClick={togglePopup}
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassPopup;
