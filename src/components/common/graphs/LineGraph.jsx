import { ResponsiveLine } from "@nivo/line";
import { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";

const LineGraph = ({ data, label }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h2>{label}</h2>
      <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 180, bottom: 150, left: 60 }}
        xScale={{ type: "point" }}
        lineWidth={3}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        curve="monotoneY"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Months",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Value",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={({ id }) => data.find((d) => d.id === id).color}
        theme={{
          tooltip: {
            container: {
              background: theme === "dark" ? "#333" : "#fff",
              color: theme === "dark" ? "#fff" : "#333",
            },
          },
          text: theme === "dark" ? { fill: "#fff" } : { fill: "#000" },
          crosshair:
            theme === "dark"
              ? { line: { stroke: "#fff" } }
              : { line: { stroke: "#000" } },
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={1}
        pointBorderColor={theme === "dark" ? "#727272" : "#000000"}
        enablePointLabel={true}
        pointLabel="y"
        pointLabelYOffset={-12}
        areaOpacity={0}
        enableSlices="x"
        enableTouchCrosshair={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: true,
            translateX: 170,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 20,
            itemsSpacing: 4,
            symbolSize: 10,
            symbolShape: "square",
            itemDirection: "left-to-right",
            itemTextColor: theme === "dark" ? "#fff" : "#000",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default LineGraph;
