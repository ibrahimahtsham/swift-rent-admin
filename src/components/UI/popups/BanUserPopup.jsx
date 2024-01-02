import { useState } from "react";
import "../../../assets/css/BanUserPopup.css";

const BanUserPopup = () => {
  const [popup, setPopup] = useState(false);
  const togglePopup = () => {
    setPopup(!popup);
  };

  if (popup) {
    document.body.classList.add("active-popup");
  } else {
    document.body.classList.remove("active-popup");
  }

  return (
    <div className="pop-up-body">
      <button className="button red-button fs-4" onClick={togglePopup}>
        Ban
      </button>

      {popup && (
        <div className="popup">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="popup-content w-25 p-5"></div>
        </div>
      )}
    </div>
  );
};

export default BanUserPopup;
