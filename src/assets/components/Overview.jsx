import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", govigyan: 4000, medicinal: 2400 },
  { name: "Feb", govigyan: 3000, medicinal: 1398 },
  { name: "Mar", govigyan: 2000, medicinal: 9800 },
  { name: "Apr", govigyan: 2780, medicinal: 3908 },
  { name: "May", govigyan: 1890, medicinal: 4800 },
  { name: "Jun", govigyan: 2390, medicinal: 3800 },
  { name: "Jul", govigyan: 3490, medicinal: 4300 },
];

export function Overview({ category }) {
  const filteredData = data.map((item) => {
    if (category === "govigyan") {
      return { name: item.name, govigyan: item.govigyan };
    } else if (category === "medicinal") {
      return { name: item.name, medicinal: item.medicinal };
    }
    return item;
  });

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={filteredData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₹${value}`}
        />
        <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
        <Tooltip />
        <Legend />
        {(!category || category === "govigyan") && (
          <Bar dataKey="govigyan" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        )}
        {(!category || category === "medicinal") && (
          <Bar dataKey="medicinal" fill="#10b981" radius={[4, 4, 0, 0]} />
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}