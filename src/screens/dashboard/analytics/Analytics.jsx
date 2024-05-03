import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import LineGraph from "../../../components/common/graphs/LineGraph";
import PieGraph from "../../../components/common/graphs/PieGraph";
import SunburstGraph from "../../../components/common/graphs/SunburstGraph";
import HorizontalStackedBarGraph from "../../../components/common/graphs/bar-graphs/HorizontalStackedBarGraph";
import VerticalBarGraph from "../../../components/common/graphs/bar-graphs/VerticalBarGraph";
import {
  cityData,
  complainsData,
  lineGraphData,
  managerTypesData,
  propertyStatusData,
  propertyTypesPerCityData,
  rentPaymentData,
  rentalsData,
  usersData,
  verticalBarGraphData,
} from "../../../utils/data/AnalyticsData";
import { updatePropertyTypesPerCityData } from "./AnalyticsBarGraphUpdater";
import { AnalyticsCard } from "./AnalyticsCard";
import { updateLineGraphData } from "./AnalyticsLineGraphUpdater";
import {
  updateCityData,
  updateComplainsData,
  updateManagerTypesData,
  updateRentPaymentData,
  updateRentalsData,
  updateUserData,
} from "./AnalyticsPieChartsDataUpdaters";
import { updatePropertyStatusData } from "./AnalyticsSunburstGraphUpdater";

const Analytics = () => {
  // line graph
  const [updatedLineGraphData, setUpdatedLineGraphData] =
    useState(lineGraphData);

  // bar graph
  const [updatedPropertyTypesPerCityData, setUpdatedPropertyTypesPerCityData] =
    useState(propertyTypesPerCityData);

  // sunburst graph
  const [updatedPropertyStatusData, setUpdatedPropertyStatusData] =
    useState(propertyStatusData);

  // pie graphs
  const [updatedUserData, setUpdatedUserData] = useState(usersData);
  const [updatedRentalsData, setUpdatedRentalsData] = useState(rentalsData);
  const [updatedRentPaymentData, setUpdatedRentPaymentData] =
    useState(rentPaymentData);
  const [updatedCityData, setUpdatedCityData] = useState(cityData);
  const [updatedComplainsData, setUpdatedComplainsData] =
    useState(complainsData);
  const [updatedManagerTypesData, setUpdatedManagerTypesData] =
    useState(managerTypesData);

  useEffect(() => {
    setTimeout(() => {
      // line graph
      setUpdatedLineGraphData(updateLineGraphData(lineGraphData));

      // bar graph
      setUpdatedPropertyTypesPerCityData(
        updatePropertyTypesPerCityData(propertyTypesPerCityData)
      );

      // sunburst graph
      setUpdatedPropertyStatusData(
        updatePropertyStatusData(propertyStatusData)
      );

      // pie charts
      setUpdatedUserData(updateUserData(usersData));
      setUpdatedRentalsData(updateRentalsData(rentalsData));
      setUpdatedRentPaymentData(updateRentPaymentData(rentPaymentData));
      setUpdatedCityData(updateCityData(cityData));
      setUpdatedComplainsData(updateComplainsData(complainsData));
      setUpdatedManagerTypesData(updateManagerTypesData(managerTypesData));
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Analytics</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AnalyticsCard style={{ height: "400px" }}>
            <LineGraph
              data={updatedLineGraphData}
              label={"Analytics Per Month (past 12 months)"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={12}>
          <AnalyticsCard style={{ height: "350px" }}>
            <HorizontalStackedBarGraph
              data={updatedPropertyTypesPerCityData}
              label={"Property Types Per City"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={12}>
          <AnalyticsCard style={{ height: "500px" }}>
            <VerticalBarGraph
              data={verticalBarGraphData}
              yLabel={"Cities"}
              label={"Property Types Per City"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={12}>
          <AnalyticsCard style={{ height: "500px" }}>
            <SunburstGraph
              data={updatedPropertyStatusData}
              label={"Property Status (Vacant vs Occupied)"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={updatedUserData}
              label={"Users"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={updatedRentalsData}
              label={"Tenants vs Rentals"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={updatedRentPaymentData}
              label={"On-Time vs Late Rent Payments"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={updatedCityData}
              label={"Properties (Islamabad vs Rawalpindi)"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={updatedComplainsData}
              label={"User Complains"}
              description={"Total: 5"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={updatedManagerTypesData}
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
