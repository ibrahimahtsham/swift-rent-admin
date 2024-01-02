import { useEffect, useState } from "react";
import "../assets/css/ManageProperties.css";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const ManageProperties = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/admin/properties-data`);
        setData(response.data.propertyList);
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

  const renderProperties = (properties, index) => {
    return (
      <tr className="border-bottom" key={index}>
        <td>{properties.ownerName}</td>
        <td>{properties.tenantName}</td>
        {/* <td>
          {new Intl.NumberFormat("en-PK", {
            style: "currency",
            currency: "PKR",
          }).format(properties.rent)}
        </td> */}
        <td>{properties.rent} Rs</td>
        <td>{properties.status}</td>
        <td>{properties.propertyAddress}</td>
      </tr>
    );
  };

  return (
    <div className="main-body content-screen">
      <div className="page-border">
        <h1>Property Data</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Property Owner</th>
                <th>Property Tenant</th>
                <th>Rent Amount</th>
                <th>Status</th>
                <th>Property Address</th>
              </tr>
            </thead>
            <tbody>{data.map(renderProperties)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProperties;
