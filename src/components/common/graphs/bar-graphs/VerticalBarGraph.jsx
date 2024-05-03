import { ResponsiveBar } from "@nivo/bar";
import React, { useContext } from "react";
import { ThemeContext } from "../../../../utils/ThemeContext";

const VerticalBarGraph = ({ data, label }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h2>{label}</h2>
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="city"
        margin={{ top: 50, right: 60, bottom: 120, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors="#1463df"
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Cities",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: -40,
        }}
        theme={{
          tooltip: {
            container: {
              background: theme === "dark" ? "#333" : "#fff",
            },
          },
          text: theme === "dark" ? { fill: "#fff" } : { fill: "#000" },
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in city: " + e.indexValue
        }
      />
    </>
  );
};

export default VerticalBarGraph;
