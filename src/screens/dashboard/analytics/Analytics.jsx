import Grid from "@mui/material/Grid";
import React from "react";
import BarGraph from "../../../components/common/BarGraph";
import PieGraph from "../../../components/common/PieGraph";
import {
  barGraphData,
  cityData,
  complainsData,
  managerTypesData,
  propertyStatusData,
  usersData,
} from "../../../utils/data/AnalyticsData";

const Analytics = () => {
  return (
    <div>
      <h1>Analytics</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div style={{ height: "300px" }}>
            <PieGraph data={usersData} label={"Total Users: 10"} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "300px" }}>
            <PieGraph data={cityData} label={"Total Properties: 5"} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "300px" }}>
            <PieGraph data={propertyStatusData} label={"Property Status"} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "300px" }}>
            <PieGraph data={complainsData} label={"User Complains"} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "300px" }}>
            <PieGraph data={managerTypesData} label={"Manager Types"} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: "400px" }}>
            <BarGraph data={barGraphData} label={"Bar Graph"} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;
