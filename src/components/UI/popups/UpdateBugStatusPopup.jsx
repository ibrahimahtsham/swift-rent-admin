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

  //if bug status is Fresh
  const sendToPending = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/admin/update-bug-status`, {
        bugID: props.bugID,
        bugStatus: "P",
      });
      if (response?.data) {
        setPopup(false);
        window.location.reload();
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  //if bug status is Pending
  const sendToResolved = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/admin/update-bug-status`, {
        bugID: props.bugID,
        bugStatus: "R",
      });
      if (response?.data) {
        setPopup(false);
        window.location.reload();
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  if (props.bugStatus === "F") {
    return (
      <div className="pop-up-body">
        <button className="button yellow-button fs-4" onClick={togglePopup}>
          Send To Pending
        </button>

        {popup && (
          <div className="popup">
            <div onClick={togglePopup} className="overlay"></div>
            <div className="popup-content w-25 p-5 text-center">
              <p className="fs-3">Are you sure you want to send to</p>
              <p className="fs-3">Pending?</p>
              <button
                className="button yellow-button fs-1"
                onClick={sendToPending}
              >
                SEND
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
  }
  if (props.bugStatus === "P") {
    return (
      <div className="pop-up-body">
        <button className="button blue-button fs-4" onClick={togglePopup}>
          Send To Resolved
        </button>

        {popup && (
          <div className="popup">
            <div onClick={togglePopup} className="overlay"></div>
            <div className="popup-content w-25 p-5 text-center">
              <p className="fs-3">Are you sure you want to send to</p>
              <p className="fs-3">Resolved?</p>
              <button
                className="button blue-button fs-1"
                onClick={sendToResolved}
              >
                SEND
              </button>
              <button
                className="button red-button close-popup mt-1 me-1"
                onClick={togglePopup}
              >
                x
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default BanUserPopup;
