import React from "react";
import { Chart } from "react-google-charts";
import { Card } from "react-bootstrap";

const FinancialStats = () => {
  return (
    <div className="main-body">
      <h1>Financial Statistics</h1>
      <div>
        <Card border="primary">
          <div>
            {/* Line Chart 1 */}
            <Chart
              width={"100%"}
              height={"600px"}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Month", "Rent Collected"],
                ["Jan 2023", 1000],
                ["Feb 2023", 1170],
                ["Mar 2023", 660],
                ["Apr 2023", 1030],
                ["May 2023", 850],
                ["Jun 2023", 1250],
                ["Jul 2023", 1100],
                ["Aug 2023", 900],
                ["Sep 2023", 1050],
                ["Oct 2023", 950],
                ["Nov 2023", 1200],
                ["Dec 2023", 1300],
                ["Jan 2024", 1400],
                ["Feb 2024", 1600],
                ["Mar 2024", 1100],
                ["Apr 2024", 900],
                ["May 2024", 950],
                ["Jun 2024", 1200],
                ["Jul 2024", 1350],
                ["Aug 2024", 1150],
                ["Sep 2024", 1000],
                ["Oct 2024", 950],
                ["Nov 2024", 1300],
                ["Dec 2024", 1450],
              ]}
              options={{
                title: "Property Information",
                curveType: "function",
                legend: { position: "bottom" },
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
