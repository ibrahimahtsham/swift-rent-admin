import { BASE_URL } from "../utils/constants"; // api url
import React, { useState, useEffect } from "react";
import axios from "axios";
import EditPopup from "../components/UI/popups/EditUserPopup";
import BanUserPopup from "../components/UI/popups/BanUserPopup";
// import qs from "qs";

import "../assets/css/ManageOwners.css";
import UnBanUserPopup from "../components/UI/popups/UnBanUserPopup";

const ManageOwners = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/admin/list-owners`);
        setData(response.data.owners);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once after the initial render

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const renderOwner = (owner, index) => {
    return (
      <tr className="border-bottom" key={index}>
        <td>{owner.ownername}</td>
        <td>{owner.dob}</td>
        <td>{owner.email}</td>
        <td>{owner.phone}</td>
        <td>
          <div className="options-buttons-container">
            <EditPopup
              editType="Owner"
              userID={owner.userid}
              userName={owner.ownername}
              userDOB={owner.dob}
              userEmail={owner.email}
              userPhone={owner.phone}
            />
            <BanUserPopup userID={owner.userid} userName={owner.ownername} />
            <UnBanUserPopup userID={owner.userid} userName={owner.ownername} />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="main-body content-screen">
      <div className="page-border">
        <h1>Owner Data</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Owner Name</th>
                <th>Date Of Birth</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>{data.map(renderOwner)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOwners;
