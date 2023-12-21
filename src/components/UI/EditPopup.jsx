import React, { useState } from "react";
import "../../assets/css/EditPopup.css";

export default function EditPopup() {
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
    <>
      <button className="button blue-button" onClick={togglePopup}>
        Edit
      </button>

      {popup && (
        <div className="popup">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="popup-content">
            <h2>Edit Owner</h2>
            <form action="">
              <label className="edit-labels" for="name">
                Name
              </label>
              <input
                className="edit-inputs"
                type="text"
                id="name"
                name="name"
                required
              />

              <label className="edit-labels" for="dob">
                Date of Birth
              </label>
              <input
                className="edit-inputs"
                type="text"
                id="dob"
                name="dob"
                pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]
                |2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                placeholder="yyyy-mm-dd"
                required
              />
              {/* Checks that
                1) the year is numeric and starts with 19 or 20,
                2) the month is numeric and between 01-12, and
                3) the day is numeric between 01-29, or
                b) 30 if the month value is anything other than 02, or
                c) 31 if the month value is one of 01,03,05,07,08,10, or 12. 
                from: https://www.html5pattern.com/Dates*/}

              <label className="edit-labels" for="email">
                Email
              </label>
              <input
                className="edit-inputs"
                type="email"
                id="email"
                name="email"
                required
              />

              <label className="edit-labels" for="phone">
                Phone Number
              </label>
              <input
                className="edit-inputs"
                type="tel"
                id="phone"
                name="phone"
                required
              />

              <div style={{ textAlign: "center" }}>
                <button className="button blue-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <button
              className="button red-button close-popup"
              onClick={togglePopup}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
