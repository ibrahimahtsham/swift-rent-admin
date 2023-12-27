import { BASE_URL } from "../utils/constants"; // api url
import React, { useState, useEffect } from "react";
import axios from "axios";
import EditPopup from "../components/UI/EditPopup";
// import qs from "qs";

import "../assets/css/ManageOwners.css";

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

  // const handleDelete = async (ownerID) => {
  //   try {
  //     const formData = { ownerID: ownerID };
  //     const response = await axios.delete(`${BASE_URL}/admin/delete-owner`, {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       data: qs.stringify(formData),
  //     });

  //     console.log("From ibrahim: " + ownerID);

  //     if (response?.data?.success) {
  //       alert("Deleted successfully");
  //     } else {
  //       alert("Deletion failed");
  //     }
  //   } catch (error) {
  //     setError(error);
  //     console.error("Error deleting data:", error);
  //   }
  // };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const renderOwner = (owner, index) => {
    return (
      <tr key={index}>
        <td>{owner.ownername}</td>
        <td>{owner.dob}</td>
        <td>{owner.email}</td>
        <td>{owner.phone}</td>
        <td>
          <EditPopup
            editType="Owner"
            userID={owner.userid}
            userName={owner.ownername}
            userDOB={owner.dob}
            userEmail={owner.email}
            userPhone={owner.phone}
          />
          {/* <button
            onClick={() => handleDelete(owner.ownerid)}
            className="button red-button"
          >
            Delete
          </button> */}
        </td>
      </tr>
    );
  };

  return (
    <div className="main-body">
      <div className="table-div">
        <h1>Owner Data</h1>
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
  );
};

export default ManageOwners;
