import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Sales, Profits, and Expenses",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 100,
        })),
        backgroundColor: "rgba(255, 159, 64, 1)", //choosing colors
        borderColor: "rgba(255, 159, 64, 1)",//choosing colors
        borderWidth: 1,
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

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
