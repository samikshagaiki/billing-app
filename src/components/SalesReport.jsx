import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Sample data - this would come from your backend in a real app
const monthlySalesData = [
  { month: "Jan", govigyan: 4000, medicinal: 2400 },
  { month: "Feb", govigyan: 3000, medicinal: 1398 },
  { month: "Mar", govigyan: 2000, medicinal: 9800 },
  { month: "Apr", govigyan: 2780, medicinal: 3908 },
  { month: "May", govigyan: 1890, medicinal: 4800 },
  { month: "Jun", govigyan: 2390, medicinal: 3800 },
  { month: "Jul", govigyan: 3490, medicinal: 4300 },
  { month: "Aug", govigyan: 2890, medicinal: 2300 },
  { month: "Sep", govigyan: 3490, medicinal: 4300 },
  { month: "Oct", govigyan: 4000, medicinal: 2400 },
  { month: "Nov", govigyan: 3200, medicinal: 3800 },
  { month: "Dec", govigyan: 4100, medicinal: 2900 }
];

const dailySalesData = [
  { date: "01/03", sales: 4000 },
  { date: "02/03", sales: 3000 },
  { date: "03/03", sales: 2000 },
  { date: "04/03", sales: 2780 },
  { date: "05/03", sales: 1890 },
  { date: "06/03", sales: 2390 },
  { date: "07/03", sales: 3490 },
  { date: "08/03", sales: 2000 },
  { date: "09/03", sales: 2500 },
  { date: "10/03", sales: 2800 },
  { date: "11/03", sales: 3300 },
  { date: "12/03", sales: 4200 },
  { date: "13/03", sales: 4100 },
  { date: "14/03", sales: 3800 }
];

const categoryData = [
  { name: "Govigyan", value: 63 },
  { name: "Medicinal", value: 37 }
];

const COLORS = ["#0088FE", "#00C49F"];

export function SalesReport() {
  return (
    <div className="space-y-6">
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Monthly Sales Comparison</h3>
          <p className="text-sm text-gray-500">
            Comparison of monthly sales for Govigyan and Medicinal products
          </p>
        </div>
        <div className="p-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlySalesData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="govigyan" name="Govigyan" fill="#8884d8" />
              <Bar dataKey="medicinal" name="Medicinal" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Daily Sales Trend</h3>
            <p className="text-sm text-gray-500">Sales trend over the last 14 days</p>
          </div>
          <div className="p-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={dailySalesData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Sales Distribution</h3>
            <p className="text-sm text-gray-500">
              Distribution of sales between categories
            </p>
          </div>
          <div className="p-4 flex justify-center items-center h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded-md overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Top Selling Products</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium">Product</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Category</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Units Sold</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">Organic Fertilizer</td>
                <td className="px-4 py-2 text-sm">Govigyan</td>
                <td className="px-4 py-2 text-sm">245</td>
                <td className="px-4 py-2 text-sm">₹122,255</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">Herbal Supplement</td>
                <td className="px-4 py-2 text-sm">Medicinal</td>
                <td className="px-4 py-2 text-sm">189</td>
                <td className="px-4 py-2 text-sm">₹151,011</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">Neem Oil Extract</td>
                <td className="px-4 py-2 text-sm">Govigyan</td>
                <td className="px-4 py-2 text-sm">156</td>
                <td className="px-4 py-2 text-sm">₹74,880</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">Ayurvedic Tea</td>
                <td className="px-4 py-2 text-sm">Medicinal</td>
                <td className="px-4 py-2 text-sm">132</td>
                <td className="px-4 py-2 text-sm">₹52,668</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">Bio Compost</td>
                <td className="px-4 py-2 text-sm">Govigyan</td>
                <td className="px-4 py-2 text-sm">98</td>
                <td className="px-4 py-2 text-sm">₹34,300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}