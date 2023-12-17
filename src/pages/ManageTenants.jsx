import "../assets/css/ManageTenants.css";

import { BASE_URL } from "../utils/constants"; // api url
import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageTenants = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/admin/list-tenants`);
        setData(response.data.tenants);
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

  const tenants = data;

  const renderTenant = (tenants, index) => {
    return (
      <tr key={index}>
        <td>{tenants.tenantname}</td>
        <td>{tenants.dob}</td>
        <td>{tenants.email}</td>
        <td>{tenants.phone}</td>
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
        <h1>Tenant Data</h1>
        <table>
          <thead>
            <th>Tenant Name</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Options</th>
          </thead>
          <tbody>{tenants.map(renderTenant)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTenants;
