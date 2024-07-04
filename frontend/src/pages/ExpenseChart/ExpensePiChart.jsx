import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const ExpenseDoughnutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="h-80 rounded-lg bg-gray-200">
      <div className="h-12">
        <h2 className="text-gray-400 flex justify-start p-4">
          Expense Doughnut Chart
        </h2>
      </div>
      <hr className="border border-gray-300" />
      <div className="h-64 p-2">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseDoughnutChart;
