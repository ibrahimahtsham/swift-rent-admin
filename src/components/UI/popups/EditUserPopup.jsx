import React, { useState } from "react";
import axios from "axios";
import "../../../assets/css/EditUserPopup.css";
import { BASE_URL } from "../../../utils/constants";

export default function EditPopup(props) {
  //popup open and close logic
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  if (popup) {
    document.body.classList.add("active-popup");
  } else {
    document.body.classList.remove("active-popup");
  }

  //api

  const handleEdit = async (event) => {
    event.preventDefault(); //used this to pause console for debugging
    const formData = new FormData(event.target); // to store data coming from html form (input feilds)
    try {
      const response = await axios.put(`${BASE_URL}/admin/edit-user`, {
        userID: props.userID,
        userName: formData.get("name"),
        DOB: formData.get("dob"),
        email: formData.get("email"),
        phone: formData.get("phone"),
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
      <button className="button blue-button fs-4" onClick={togglePopup}>
        Edit
      </button>

      {popup && (
        <div className="popup">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="popup-content w-25 p-5">
            <h2 className="text-center fs-5">Edit {props.editType}</h2>
            <form id="editForm" onSubmit={handleEdit}>
              <label className="edit-labels" for="name">
                Name
              </label>
              <input
                className="edit-inputs"
                defaultValue={props.userName}
                type="text"
                id="name"
                name="name"
                required
              />

              <label className="edit-labels" for="dob">
                Date of Birth (YYYY-MM-DD)
              </label>
              <input
                className="edit-inputs"
                type="text"
                id="dob"
                name="dob"
                pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                defaultValue={props.userDOB}
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
                defaultValue={props.userEmail}
                type="email"
                id="email"
                name="email"
                required
              />

              <label className="edit-labels" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="edit-inputs"
                defaultValue={props.userPhone}
                type="tel"
                id="phone"
                name="phone"
                pattern="^\d{11}$"
                title="Enter 11-digit number"
                required
              />

              <div style={{ textAlign: "center" }}>
                <button className="button blue-button fs-5 mt-3" type="submit">
                  Submit
                </button>
              </div>
            </form>
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
