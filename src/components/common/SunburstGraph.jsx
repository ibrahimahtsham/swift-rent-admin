import { ResponsiveSunburst } from "@nivo/sunburst";
import React, { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

const SunburstGraph = ({ data, label, description }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h2>{label}</h2>
      <h3>{description}</h3>
      <ResponsiveSunburst
        data={data}
        margin={{ bottom: 160 }}
        identity="id"
        value="value"
        cornerRadius={2}
        borderWidth={1}
        borderColor={theme === "dark" ? "#333" : "#fff"}
        colors={(d) => d.data.color}
        animate={true}
        motionConfig="gentle"
        enableArcLabels={true}
        arcLabel={(d) => `${d.id}`} // to display the value ${d.value ? d.value : ""}
        valueFormat={(value) => `${value}`}
        arcLabelsTextColor="#000000"
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
              fontSize: 12,
            },
          },
        }}
      />
    </>
  );
};

export default SunburstGraph;
