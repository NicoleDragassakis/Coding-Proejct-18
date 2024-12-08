import React from "react";
import ChartComponent from "./ChartComponent";

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: "Profits",
        data: data.profits,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;
