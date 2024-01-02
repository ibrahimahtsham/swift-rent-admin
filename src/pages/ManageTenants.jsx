import { BASE_URL } from "../utils/constants"; // api url
import React, { useState, useEffect } from "react";
import axios from "axios";
import EditPopup from "../components/UI/popups/EditUserPopup";
import BanUserPopup from "../components/UI/popups/BanUserPopup";

import "../assets/css/ManageTenants.css";
import UnBanUserPopup from "../components/UI/popups/UnBanUserPopup";

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

  const renderTenant = (tenant, index) => {
    return (
      <tr className="border-bottom" key={index}>
        <td>{tenant.tenantname}</td>
        <td>{tenant.dob}</td>
        <td>{tenant.email}</td>
        <td>{tenant.phone}</td>
        <td>
          <div className="options-buttons-container">
            <EditPopup
              editType="Tenant"
              userID={tenant.userid}
              userDOB={tenant.dob}
              userEmail={tenant.email}
              userPhone={tenant.phone}
            />
            <BanUserPopup userID={tenant.userid} userName={tenant.tenantname} />
            <UnBanUserPopup
              userID={tenant.userid}
              userName={tenant.ownername}
            />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="main-body content-screen">
      <div className="page-border">
        <h1>Tenant Data</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Tenant Name</th>
                <th>Date Of Birth</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>{data.map(renderTenant)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTenants;
