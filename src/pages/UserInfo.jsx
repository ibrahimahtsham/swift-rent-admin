import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import ManageOwners from "./ManageOwners";
import ManageTenants from "./ManageTenants";
import ManageProperties from "./ManageProperties";
import FinancialStats from "./FinancialStats";
import UserComplains from "./UserComplains";

import "bootstrap/dist/css/bootstrap.min.css";

const UserInfo = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/admin/user-info`);
        console.log(response.data);
        setData(response.data);
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
  // Assuming you have the user count and user type data
  const userTypes = ["Owners", "Tenants"]; // Replace with your actual user types
  const userCounts = [data.totalOwners, data.totalTenants]; // Replace with your actual user counts

  const getTotalUsers = () => userCounts.reduce((acc, count) => acc + count, 0);

  return (
    <div>
      <div className="main-body content-screen-main">
        <div className="page-border">
          <h1>User Information</h1>
          <Container>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <Card className="mb-4" border="secondary">
                  <Card.Body>
                    <Card.Title className="fs-1">Total Users</Card.Title>
                    <Card.Text className="fs-1 text-end">
                      {getTotalUsers()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {userTypes.map((type, index) => (
                <Col key={type} lg={4} md={6} sm={12}>
                  <Card className="mb-4" border="info">
                    <Card.Body>
                      <Card.Title className="text-start fs-1">
                        {type}
                      </Card.Title>
                      <Card.Text className="text-end fs-1">{`${userCounts[index]}`}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <ManageOwners />
      <ManageTenants />
      <ManageProperties />
      <FinancialStats />
      <UserComplains />
    </div>
  );
};

export default UserInfo;
