import Grid from "@mui/material/Grid";
import React from "react";
import BarGraph from "../../../components/common/graphs/BarGraph";
import LineGraph from "../../../components/common/graphs/LineGraph";
import PieGraph from "../../../components/common/graphs/PieGraph";
import SunburstGraph from "../../../components/common/graphs/SunburstGraph";
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
import { AnalyticsCard } from "./AnalyticsCard";

const Analytics = () => {
  return (
    <div>
      <h1>Analytics</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AnalyticsCard style={{ height: "400px" }}>
            <LineGraph
              data={lineGraphData}
              label={"Analytics Per Month (past 12 months)"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={12}>
          <AnalyticsCard style={{ height: "350px" }}>
            <BarGraph data={barGraphData} label={"Property Types Per City"} />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={12}>
          <AnalyticsCard style={{ height: "500px" }}>
            <SunburstGraph
              data={propertyStatusData}
              label={"Property Status (Vacant vs Occupied)"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={usersData}
              label={"Users"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={rentalsData}
              label={"Tenants vs Rentals"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={rentPaymentData}
              label={"On-Time vs Late Rent Payments"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={cityData}
              label={"Properties (Islamabad vs Rawalpindi)"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={complainsData}
              label={"User Complains"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={managerTypesData}
              label={"Manager Types"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;
