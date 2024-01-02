import { useState } from "react";
import "../../../assets/css/BanUserPopup.css";
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";

const BanUserPopup = (props) => {
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

  const handleBan = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/admin/ban-user`, {
        userID: props.userID,
      });
      if (response?.data) {
        setPopup(false);
        window.location.reload();
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div className="pop-up-body">
      <button className="button red-button fs-4" onClick={togglePopup}>
        Ban
      </button>

      {popup && (
        <div className="popup">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="popup-content w-25 p-5 text-center">
            <p className="fs-3">
              Are you sure you want to ban the user: {props.userName}
            </p>
            <button className="button red-button fs-1" onClick={handleBan}>
              BAN
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

export default BanUserPopup;
