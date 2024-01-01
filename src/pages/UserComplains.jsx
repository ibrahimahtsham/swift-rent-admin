import "../assets/css/UserComplains.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const UserComplains = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/admin/user-complaints`);
        setData(response.data.bugData);
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

  const renderComplains = (complain, index) => {
    return (
      <tr className="border-bottom" key={index}>
        <td>{complain.usertype}</td>
        <td>{complain.bugtype}</td>
        <td>{complain.bugdescription}</td>
        <td>{complain.bugstatus}</td>
      </tr>
    );
  };

  return (
    <div className="main-body content-screen">
      <div className="page-border">
        <h1>User Complains</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>User Type</th>
                <th>Bug Type</th>
                <th>Bug Description</th>
                <th>Bug Status</th>
              </tr>
            </thead>
            <tbody>{data.map(renderComplains)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserComplains;
