import { ResponsiveBar } from "@nivo/bar";
import React, { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

const BarGraph = ({ data, label }) => {
  const { theme } = useContext(ThemeContext);

  const maxSum = data.reduce((max, curr) => {
    let sum = 0;
    for (let key in curr) {
      if (typeof curr[key] === "number") {
        sum += curr[key];
      }
    }
    return sum > max ? sum : max;
  }, 0);

  return (
    <>
      <h2>{label}</h2>
      <ResponsiveBar
        data={data}
        maxValue={maxSum * 1.1}
        keys={[
          "Houses",
          "Upper Portion",
          "Lower Portion",
          "Flats",
          "Rooms",
          "Commercial Plots",
          "Agricultural Plots",
          "Industrial Plots",
          "Offices",
          "Shops",
          "Buildings",
          "Warehouses",
          "Factories",
        ]}
        indexBy="city"
        margin={{ right: 130, left: 100 }}
        padding={0.8}
        layout="horizontal"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "category10" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", "3"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        theme={{
          tooltip: {
            container: {
              background: theme === "dark" ? "#333" : "#fff",
            },
          },
          text: theme === "dark" ? { fill: "#fff" } : { fill: "#000" },
        }}
        enableGridY={false}
        enableTotals={true}
        labelSkipWidth={15}
        labelSkipHeight={12}
        labelTextColor="#fff"
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: true,
            translateX: 120,
            translateY: -70,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 10,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in city: " + e.indexValue
        }
      />
    </>
  );
};

export default BarGraph;
