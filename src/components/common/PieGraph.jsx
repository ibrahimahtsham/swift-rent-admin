import { ResponsivePie } from "@nivo/pie";
import React, { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

const PieGraph = ({ data, label, description }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h2>{label}</h2>
      <h3>{description}</h3>
      <ResponsivePie
        data={data}
        margin={{ right: 160, left: 160 }}
        startAngle={-90}
        endAngle={90}
        sortByValue={true}
        fit={false}
        activeOuterRadiusOffset={4}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", "3"]],
        }}
        colors={({ data }) => data.color}
        arcLinkLabelsTextColor={theme === "dark" ? "#fff" : "#000"}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color", modifiers: [] }}
        arcLabelsSkipAngle={9}
        arcLabelsTextColor={({ data }) => {
          const color = data.color.slice(4, -1);
          const lightnessString = color.split(",")[2].trim().slice(0, -1);
          const lightness = Number(lightnessString);
          return lightness < 50 ? "#fff" : "#000";
        }}
        motionConfig="slow"
        theme={{
          tooltip: {
            container: {
              background: theme === "dark" ? "#333" : "#fff",
              color: theme === "dark" ? "#fff" : "#333",
            },
          },
          text: theme === "dark" ? { fill: "#fff" } : { fill: "#000" },
          labels: {
            text: {
              fontSize: 20,
            },
          },
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: -70,
            itemsSpacing: 60,
            itemWidth: 60,
            itemHeight: 18,
            itemTextColor: theme === "dark" ? "#fff" : "#000",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 13,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default PieGraph;
