import Grid from "@mui/material/Grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LineGraph from "../../../components/common/graphs/LineGraph";
import PieGraph from "../../../components/common/graphs/PieGraph";
import SunburstGraph from "../../../components/common/graphs/SunburstGraph";
import HorizontalStackedBarGraph from "../../../components/common/graphs/bar-graphs/HorizontalStackedBarGraph";
import {
  cityData,
  complainsData,
  lineGraphData,
  managerHireResponseTimeData,
  managerTypesData,
  passwordResetResponseTimeData,
  propertyStatusData,
  propertyTypesPerCityData,
  rentPaymentData,
  rentalsData,
  usersData,
} from "../../../utils/data/AnalyticsData";
import { BASE_URL } from "../../../utils/db-config";
import {
  updateManagerHireResponseTimeData,
  updatePasswordResetResponseTimeData,
  updatePropertyTypesPerCityData,
} from "./AnalyticsBarGraphUpdater";
import { AnalyticsCard } from "./AnalyticsCard";
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
  const [
    updatedPasswordResetResponseTimeData,
    setUpdatedPasswordResetResponseTimeData,
  ] = useState(passwordResetResponseTimeData);
  const [
    updatedManagerHireResponseTimeData,
    setUpdatedManagerHireResponseTimeData,
  ] = useState(managerHireResponseTimeData);

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
    // sunburst graph
    updatePropertyStatusData().then((data) => {
      setUpdatedPropertyStatusData(data);
    });

    // bar graph
    updatePropertyTypesPerCityData().then((data) => {
      console.log(data);
      setUpdatedPropertyTypesPerCityData(data);
    });

    const intervalId = setInterval(() => {
      // line graph
      axios.get(`${BASE_URL}/api/admin/line-graph`).then((response) => {
        setUpdatedLineGraphData(response.data.data);
      });

      // bar graph
      setUpdatedPasswordResetResponseTimeData(
        updatePasswordResetResponseTimeData(passwordResetResponseTimeData)
      );
      setUpdatedManagerHireResponseTimeData(
        updateManagerHireResponseTimeData(managerHireResponseTimeData)
      );

      // pie charts
      setUpdatedUserData(updateUserData(usersData));
      setUpdatedRentalsData(updateRentalsData(rentalsData));
      setUpdatedRentPaymentData(updateRentPaymentData(rentPaymentData));
      setUpdatedCityData(updateCityData(cityData));
      setUpdatedComplainsData(updateComplainsData(complainsData));
      setUpdatedManagerTypesData(updateManagerTypesData(managerTypesData));
    }, 500); // Run every 0.5 second

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId); // Stop the interval after 5 seconds
    }, 3000);

    // Clear the interval and the timeout when the component unmounts
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Analytics</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph data={updatedComplainsData} label={"User Complains"} />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph data={updatedUserData} label={"User Types"} />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard style={{ height: "500px" }}>
            <SunburstGraph
              data={updatedPropertyStatusData}
              label={"Property Status (Vacant vs Occupied)"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={updatedRentPaymentData}
              label={"On-Time vs Late Rent Payments"}
            />
          </AnalyticsCard>
        </Grid>
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
        {/* <Grid item xs={12}>
          <AnalyticsCard style={{ height: "500px" }}>
            <VerticalBarGraph
              data={updatedPasswordResetResponseTimeData}
              yLabel={"Months"}
              label={"Average Response Time for Password Reset (in hours)"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={12}>
          <AnalyticsCard style={{ height: "500px" }}>
            <VerticalBarGraph
              data={updatedManagerHireResponseTimeData}
              yLabel={"Months"}
              label={
                "Average Time Taken to Accept Manager Hire Requests (in hours)"
              }
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={updatedRentalsData}
              label={"Tenants vs Rentals [Remove]"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={updatedCityData}
              label={"Properties (Islamabad vs Rawalpindi) [Remove]"}
            />
          </AnalyticsCard>
        </Grid>
        <Grid item xs={6}>
          <AnalyticsCard>
            <PieGraph
              data={updatedManagerTypesData}
              label={"Manager Types (Remove)"}
            />
          </AnalyticsCard>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Analytics;
