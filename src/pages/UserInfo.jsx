import React from "react";
import ManageOwners from "./ManageOwners";
import ManageTenants from "./ManageTenants";
import ManageProperties from "./ManageProperties";
import FinancialStats from "./FinancialStats";
import UserComplains from "./UserComplains";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const UserInfo = () => {
  // Assuming you have the user count and user type data
  const userTypes = ["Owners", "Tenants"]; // Replace with your actual user types
  const userCounts = [10, 20]; // Replace with your actual user counts

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
                    <Card.Title>Total Users</Card.Title>
                    <Card.Text>{getTotalUsers()}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {userTypes.map((type, index) => (
                <Col key={type} lg={4} md={6} sm={12}>
                  <Card className="mb-4" border="info">
                    <Card.Body>
                      <Card.Title>{type}</Card.Title>
                      <Card.Text>{`Count: ${userCounts[index]}`}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <ManageOwners />
      <br />
      <ManageTenants />
      <br />
      <ManageProperties />
      <br />
      <FinancialStats />
      <br />
      <UserComplains />
    </div>
  );
};

export default UserInfo;
