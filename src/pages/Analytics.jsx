import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell
} from 'recharts';

const lineData = [
  { name: 'January', uv: 1500 },
  { name: 'February', uv: 1650 },
  { name: 'March', uv: 1750 },
];

const barData = [
  { name: 'January', pv: 2400 },
  { name: 'February', pv: 2210 },
  { name: 'March', pv: 2290 },
];

const pieData = [
  { name: 'Page A', value: 400 },
  { name: 'Page B', value: 300 },
  { name: 'Page C', value: 300 },
  { name: 'Page D', value: 200 },
];

const colors = ['#007BFF', '#28A745', '#FFC107', '#FFD700'];

const Analytics = () => {
  return (
    <div className="bg-background dark:bg-darkBackground text-text dark:text-darkText p-4 md:p-8">
      <div className="pt-16 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 p-2">
          <div className="bg-white dark:bg-darkPrimary p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">Story Performance</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#007BFF" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="bg-white dark:bg-darkPrimary p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">Reader Engagement</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill="#28A745" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="bg-white dark:bg-darkPrimary p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">Progress Over Time</h2>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#FFC107" fill="#FFC107" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-4">
        <div className="w-full md:w-1/5 p-2">
          <div className="bg-white dark:bg-darkPrimary p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">Orders Created</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} fill="#FFC107" dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-full md:w-1/5 p-2">
          <div className="bg-white dark:bg-darkPrimary p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">Total Sales</h2>
            <div>$2,145,132.80</div>
            <div className="text-red-500 dark:text-red-500">-4.98%</div>
          </div>
        </div>
        <div className="w-full md:w-1/5 p-2">
          <div className="bg-white dark:bg-darkPrimary p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">PPC Sales</h2>
            <div>$890.00</div>
            <div className="text-secondary dark:text-darkHighlight">+0.17%</div>
          </div>
        </div>
        <div className="w-full md:w-1/5 p-2">
          <div className="bg-white dark:bg-darkPrimary p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">Units Sales</h2>
            <div>$151,740</div>
            <div className="text-secondary dark:text-darkHighlight">+0.17%</div>
          </div>
        </div>
        <div className="w-full md:w-1/5 p-2">
          <div className="bg-white dark:bg-darkPrimary p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">Organic Sales Rate</h2>
            <div>100.00%</div>
            <div className="text-secondary dark:text-darkHighlight">+0.12%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
