import { ResponsiveSunburst } from "@nivo/sunburst";
import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";

const SunburstGraph = ({ data, label, description }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h2>{label}</h2>
      <h3>{description}</h3>
      <ResponsiveSunburst
        data={data}
        margin={{ bottom: 100 }}
        identity="id"
        value="value"
        cornerRadius={2}
        borderWidth={1}
        borderColor={theme === "dark" ? "#333" : "#fff"}
        colors={(d) => d.data.color}
        arcLabelsTextColor={({ data }) => {
          const color = data.color.slice(4, -1);
          const lightnessString = color.split(",")[2].trim().slice(0, -1);
          const lightness = Number(lightnessString);
          return lightness < 50 ? "#fff" : "#000";
        }}
        animate={true}
        motionConfig="gentle"
        arcLabelsSkipAngle={5}
        enableArcLabels={true}
        arcLabel={(d) => `${d.id.charAt(0)}:${d.value ? d.value : ""}`}
        valueFormat={(value) => `${value}`}
        theme={{
          tooltip: {
            container: {
              background: theme === "dark" ? "#333" : "#fff",
              color: theme === "dark" ? "#fff" : "#333",
            },
          },
          labels: {
            text: {
              fill: theme === "dark" ? "#fff" : "#000",
              fontSize: 16,
            },
          },
        }}
      />
    </>
  );
};

export default SunburstGraph;
