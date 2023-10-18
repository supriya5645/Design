import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './bar.css';

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total count/value',
        data: [1700, 1500, 1300, 900, 700, 600, 500, 400, 300, 200, 100, 90], // Default value for each month
        backgroundColor: ['#999999', '#999999', '#800080', '#999999', '#999999', '#999999', '#999999', '#999999', '#999999', '#999999', '#999999', '#999999'],
        borderWidth: 0, // Remove the lines on the bars
        borderRadius: 10, // Set the corner radius for the bars (adjust the value as needed)
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide the vertical grid lines
        },
        barPercentage: 0.6, // Adjust the bar width (0.6 means a 60% width)
        categoryPercentage: 0.7, // Adjust the space between bars (0.7 means a 70% gap)
      },
      y: {
        min: 100, // Adjust the min value to create space between bars and x-axis
        max: 1900, // Adjust the max value to provide padding from the bottom
        grid: {
          display: false, // Hide the y-axis line
        },
        display: false, // Hide the y-axis labels
      },
    },
  };

  return (
    <div className="chart-container">
      <h1>Overview</h1>
      <span>Monthly Earning</span>
      <div className="chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
