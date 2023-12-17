import { BASE_URL } from "../utils/constants"; // api url
import React, { useState, useEffect } from "react";
import axios from "axios";

import "../assets/css/ManageOwners.css";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

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

  const owners = data;

  const renderOwner = (owners, index) => {
    return (
      <tr key={index}>
        <td>{owners.ownername}</td>
        <td>{owners.dob}</td>
        <td>{owners.email}</td>
        <td>{owners.phone}</td>
        <td>
          <button className="button yellow-button">Reset Password</button>
        </td>
        <td>
          <button className="button blue-button">Edit</button>
          <button className="button red-button">Delete</button>
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
            <th>Owner Name</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Options</th>
          </thead>
          <tbody>{owners.map(renderOwner)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOwners;
