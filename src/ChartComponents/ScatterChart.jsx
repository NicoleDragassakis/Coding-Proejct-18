import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Expenses vs Profits",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
        })),
        backgroundColor: "rgba(153, 102, 255, 1)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
        showLine: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "linear",
        position: "left",
      },
    },
  };

  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;
