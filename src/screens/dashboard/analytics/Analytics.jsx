import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import React, { useContext } from "react";
import BarGraph from "../../../components/common/BarGraph";
import LineGraph from "../../../components/common/LineGraph";
import PieGraph from "../../../components/common/PieGraph";
import SunburstGraph from "../../../components/common/SunburstGraph";
import { ThemeContext } from "../../../utils/ThemeContext";
import {
  barGraphData,
  cityData,
  complainsData,
  lineGraphData,
  managerTypesData,
  propertyStatusData,
  rentPaymentData,
  rentalsData,
  usersData,
} from "../../../utils/data/AnalyticsData";

const CardComponent = ({ children, style }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Card
      style={{
        height: "300px",
        padding: "20px",
        backgroundColor: theme === "dark" ? "#424242" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        ...style, // merge the passed style prop with the existing styles
      }}
    >
      {children}
    </Card>
  );
};

const Analytics = () => {
  return (
    <div>
      <h1>Analytics</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CardComponent style={{ height: "400px" }}>
            <LineGraph
              data={lineGraphData}
              label={"Analytics Per Month (past 12 months)"}
            />
          </CardComponent>
        </Grid>
        <Grid item xs={12}>
          <CardComponent style={{ height: "350px" }}>
            <BarGraph data={barGraphData} label={"Property Types Per City"} />
          </CardComponent>
        </Grid>
        <Grid item xs={12}>
          <CardComponent style={{ height: "500px" }}>
            <SunburstGraph
              data={propertyStatusData}
              label={"Property Status (Vacant vs Occupied)"}
              description={"Total: 5"}
            />
          </CardComponent>
        </Grid>
        <Grid item xs={6}>
          <CardComponent>
            <PieGraph
              data={usersData}
              label={"Users"}
              description={"Total: 5"}
            />
          </CardComponent>
        </Grid>
        <Grid item xs={6}>
          <CardComponent>
            <PieGraph
              data={cityData}
              label={"Properties (Islamabad vs Rawalpindi)"}
              description={"Total: 5"}
            />
          </CardComponent>
        </Grid>
        <Grid item xs={6}>
          <CardComponent>
            <PieGraph
              data={rentalsData}
              label={"Tenants vs Rentals"}
              description={"Total: 5"}
            />
          </CardComponent>
        </Grid>
        <Grid item xs={6}>
          <CardComponent>
            <PieGraph
              data={rentPaymentData}
              label={"On-Time vs Late Rent Payments"}
              description={"Total: 5"}
            />
          </CardComponent>
        </Grid>
        <Grid item xs={6}>
          <CardComponent>
            <PieGraph
              data={complainsData}
              label={"User Complains"}
              description={"Total: 5"}
            />
          </CardComponent>
        </Grid>
        <Grid item xs={6}>
          <CardComponent>
            <PieGraph
              data={managerTypesData}
              label={"Manager Types"}
              description={"Total: 5"}
            />
          </CardComponent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;
