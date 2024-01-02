import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { Card } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const FinancialStats = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/admin/monthly-profits`);
        setData(response.data.monthlyProfits);
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

  return (
    <div className="main-body content-screen">
      <div>
        <Card className="p-3" style={{ borderColor: "#effbff" }}>
          <h1>Financial Statistics</h1>
          <div>
            {/* Line Chart 1 */}
            <Chart
              width={"100%"}
              height={"600px"}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={data}
              options={{
                curveType: "function",
                legend: { position: "bottom" },
                pointSize: 15,
                hAxis: { textStyle: { fontSize: 20 } },
                vAxis: { textStyle: { fontSize: 20 } },
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FinancialStats;
