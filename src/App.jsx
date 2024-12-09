import React, { useEffect, useState } from "react";
import BarChart from "./ChartComponents/BarChart";
import LineChart from "./ChartComponents/LineChart";
import ScatterChart from "./ChartComponents/ScatterChart";
import BubbleChart from "./ChartComponents/BubbleChart";

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>; //Task five
  }

  return (
    <div>
      <h1>Financial Charts</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );
};

export default App;
