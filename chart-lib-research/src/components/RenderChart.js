import Recharts from "./charts/Recharts";
import ReactChartjs2 from "./charts/ReactChartjs2";
import Visx from "./charts/Visx";
import Victory from "./charts/Victory";
import Neo from "./charts/Neo";
import React from "react";

const RenderChart = ({ chart }) => {
  switch (chart) {
    case "Recharts":
      return <Recharts />;
    case "react-chartjs-2":
      return <ReactChartjs2 />;
    case "Visx":
      return <Visx />;
    case "Victory":
      return <Victory />;
    case "Neo":
      return <Neo />;
    default:
      return <Recharts />;
  }
};

export default RenderChart;