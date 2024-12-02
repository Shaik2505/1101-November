import React from "react";
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  Line,
  Bar,
  Area,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const featureData = {
  overview: [
    { date: "Day 1", activity: 120 },
    { date: "Day 2", activity: 200 },
    { date: "Day 3", activity: 170 },
    { date: "Day 4", activity: 240 },
    { date: "Day 5", activity: 300 },
    { date: "Day 6", activity: 250 },
    { date: "Day 7", activity: 280 },
  ],
  user: [
    { date: "Day 1", newUsers: 30 },
    { date: "Day 2", newUsers: 40 },
    { date: "Day 3", newUsers: 35 },
    { date: "Day 4", newUsers: 50 },
    { date: "Day 5", newUsers: 60 },
    { date: "Day 6", newUsers: 55 },
    { date: "Day 7", newUsers: 70 },
  ],
};

const Section = ({ title, data, chartKey, tableColumns, ChartType, ChartComponent }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    {/* Chart */}
    <div className="bg-white dark:bg-darkPrimary shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">{title} - Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ChartComponent data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {chartKey.map((key, idx) => (
            <ChartType
              key={idx}
              dataKey={key.dataKey}
              fill={key.color}
              name={key.label}
            />
          ))}
        </ChartComponent>
      </ResponsiveContainer>
    </div>

    {/* Table */}
    <div className="bg-white dark:bg-darkPrimary shadow-md rounded-lg p-6 overflow-auto">
      <h2 className="text-xl font-bold mb-4">{title} - Table</h2>
      <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
        <thead>
          <tr>
            {tableColumns.map((col, idx) => (
              <th
                key={idx}
                className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="odd:bg-gray-50 dark:odd:bg-gray-800 even:bg-white dark:even:bg-gray-900"
            >
              {tableColumns.map((col, colIdx) => (
                <td
                  key={colIdx}
                  className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left"
                >
                  {row[col.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex pt-16 w-screen bg-background">
      <div className="md:ml-16 p-8 flex-1 w-full dark:bg-darkBackground transition-colors duration-300 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8 text-text dark:text-darkText">
          TextingStory Chat Story Maker Overview
        </h1>

        {/* Overview Section - LineChart */}
        <Section
          title="Overview"
          data={featureData.overview}
          chartKey={[{ dataKey: "activity", color: "#8884d8", label: "Activity" }]}
          tableColumns={["Date", "Activity"]}
          ChartType={Line}
          ChartComponent={LineChart}
        />

        {/* User Profiles Section - BarChart */}
        <Section
          title="User Profiles"
          data={featureData.user}
          chartKey={[{ dataKey: "newUsers", color: "#82ca9d", label: "New Users" }]}
          tableColumns={["Date", "New Users"]}
          ChartType={Bar}
          ChartComponent={BarChart}
        />

        {/* Add more sections for other features with different chart types */}
      </div>
    </div>
  );
};

export default Dashboard;
