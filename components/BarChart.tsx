"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Record {
  date: string;
  amount: number;
}

const BarChart = ({ records }: { records: Record[] }) => {
  const data = {
    labels: records.map((record) => new Date(record.date).toLocaleDateString()),
    datasets: [
      {
        data: records.map((record) => record.amount),
        backgroundColor: records.map((record) =>
          record.amount < 7
            ? "rgba(255, 99, 132, 0.2)"
            : "rgba(75, 192, 192, 0.2)"
        ),
        borderColor: records.map((record) =>
          record.amount < 7 ? "rgba(255, 99, 132, 1)" : "rgba(75, 192, 192, 1)"
        ),
        borderWidth: 1,
        borderRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          font: {
            size: 14,
            weight: "bold" as const,
          },
          color: "#2c3e50",
        },
        ticks: {
          font: {
            size: 12,
          },
          color: "#7f8c8d",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Hours Slept",
          font: {
            size: 16,
            weight: "bold" as const,
          },
          color: "#2c3e50",
        },
        ticks: {
          font: {
            size: 12,
          },
          color: "#7f8c8d",
        },
        grid: {
          color: "#e0e0e0",
        },
        suggestedMin: 4,
        suggestedMax: 10,
        beginAtZero: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
