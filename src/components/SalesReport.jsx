import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const salesData = [
  { date: "2023-01-01", govigyan: 4000, medicinal: 2400, total: 6400 },
  { date: "2023-02-01", govigyan: 3000, medicinal: 1398, total: 4398 },
  { date: "2023-03-01", govigyan: 2000, medicinal: 9800, total: 11800 },
  { date: "2023-04-01", govigyan: 2780, medicinal: 3908, total: 6688 },
  { date: "2023-05-01", govigyan: 1890, medicinal: 4800, total: 6690 },
  { date: "2023-06-01", govigyan: 2390, medicinal: 3800, total: 6190 },
  { date: "2023-07-01", govigyan: 3490, medicinal: 4300, total: 7790 },
  { date: "2023-08-01", govigyan: 4000, medicinal: 2400, total: 6400 },
  { date: "2023-09-01", govigyan: 3000, medicinal: 1398, total: 4398 },
  { date: "2023-10-01", govigyan: 2000, medicinal: 9800, total: 11800 },
  { date: "2023-11-01", govigyan: 2780, medicinal: 3908, total: 6688 },
  { date: "2023-12-01", govigyan: 1890, medicinal: 4800, total: 6690 },
];

export function SalesReport() {
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Sales Report</h3>
            <p className="text-sm text-gray-500">Monthly sales breakdown by product category.</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setChartType("bar")}
              className={`px-3 py-1 rounded-md ${
                chartType === "bar" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Bar
            </button>
            <button
              onClick={() => setChartType("line")}
              className={`px-3 py-1 rounded-md ${
                chartType === "line" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Line
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="h-[400px]">
          {chartType === "bar" ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <XAxis
                  dataKey="date"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", { month: "short" })
                  }
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `₹${value}`}
                />
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                <Tooltip
                  formatter={(value) => [`₹${value}`, ""]}
                  labelFormatter={(label) =>
                    new Date(label).toLocaleDateString("en-US", { month: "long", year: "numeric" })
                  }
                />
                <Legend />
                <Bar dataKey="govigyan" name="Govigyan" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="medicinal" name="Medicinal" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis
                  dataKey="date"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", { month: "short" })
                  }
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `₹${value}`}
                />
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                <Tooltip
                  formatter={(value) => [`₹${value}`, ""]}
                  labelFormatter={(label) =>
                    new Date(label).toLocaleDateString("en-US", { month: "long", year: "numeric" })
                  }
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="govigyan"
                  name="Govigyan"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="medicinal"
                  name="Medicinal"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="total"
                  name="Total"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}