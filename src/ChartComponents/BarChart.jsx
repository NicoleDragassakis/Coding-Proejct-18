import React from "react";
import ChartComponent from "./ChartComponent";

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: "Sales",
        data: data.sales,
        backgroundColor: "rgba(75, 192, 192, 0.2)",//choosing colors
        borderColor: "rgba(75, 192, 192, 1)",//choosing colors
        borderWidth: 3,
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

  return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;
