import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const chartData = [
  { date: "Day 1", usage: 120 },
  { date: "Day 2", usage: 200 },
  { date: "Day 3", usage: 170 },
  { date: "Day 4", usage: 240 },
  { date: "Day 5", usage: 300 },
  { date: "Day 6", usage: 250 },
  { date: "Day 7", usage: 280 },
];

const pieData = [
  { name: "Media", value: 400 },
  { name: "Text", value: 300 },
  { name: "Collaboration", value: 300 },
  { name: "Others", value: 200 },
];

const GridSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {/* Line Chart */}
      <div className="bg-white dark:bg-darkPrimary shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Line Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="usage" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-darkPrimary shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Bar Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="usage" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-darkPrimary shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Pie Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Usage Table */}
      <div className="bg-white dark:bg-darkPrimary shadow-md rounded-lg p-6 overflow-auto">
        <h2 className="text-xl font-bold mb-4">Usage Table</h2>
        <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Date
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Usage
              </th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((item, index) => (
              <tr
                key={index}
                className="odd:bg-gray-50 dark:odd:bg-gray-800 even:bg-white dark:even:bg-gray-900"
              >
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  {item.date}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  {item.usage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GridSection;
