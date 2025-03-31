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
  PieChart,
  Pie,
  Cell
} from "recharts";

const inventoryData = [
  { name: "Organic Fertilizer", stock: 78, min: 20 },
  { name: "Herbal Supplement", stock: 32, min: 15 },
  { name: "Neem Oil Extract", stock: 45, min: 25 },
  { name: "Ayurvedic Tea", stock: 12, min: 20 },
  { name: "Bio Compost", stock: 56, min: 30 },
  { name: "Aloe Vera Gel", stock: 8, min: 10 },
  { name: "Natural Pesticide", stock: 23, min: 15 }
];

const categoryDistribution = [
  { name: "Govigyan", value: 65 },
  { name: "Medicinal", value: 35 }
];

const stockStatusData = [
  { name: "In Stock", value: 75 },
  { name: "Low Stock", value: 18 },
  { name: "Out of Stock", value: 7 }
];

const COLORS = ["#0088FE", "#00C49F", "#FF8042"];
const STOCK_COLORS = ["#4CAF50", "#FFC107", "#F44336"];

export function InventoryReport() {
  return (
    <div className="space-y-6">
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Product Stock Levels</h3>
          <p className="text-sm text-gray-500">
            Current stock levels against minimum required stock
          </p>
        </div>
        <div className="p-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={inventoryData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="stock" name="Current Stock" fill="#8884d8" />
              <Bar dataKey="min" name="Min Required" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Category Distribution</h3>
            <p className="text-sm text-gray-500">
              Distribution of inventory by product category
            </p>
          </div>
          <div className="p-4 flex justify-center items-center h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Stock Status</h3>
            <p className="text-sm text-gray-500">
              Overall status of inventory stock levels
            </p>
          </div>
          <div className="p-4 flex justify-center items-center h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stockStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stockStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={STOCK_COLORS[index % STOCK_COLORS.length]} />
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
          <h3 className="text-lg font-semibold">Low Stock Alert</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium">Product</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Category</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Current Stock</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Min Required</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">Ayurvedic Tea</td>
                <td className="px-4 py-2 text-sm">Medicinal</td>
                <td className="px-4 py-2 text-sm">12</td>
                <td className="px-4 py-2 text-sm">20</td>
                <td className="px-4 py-2 text-sm">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    Low Stock
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">Aloe Vera Gel</td>
                <td className="px-4 py-2 text-sm">Medicinal</td>
                <td className="px-4 py-2 text-sm">8</td>
                <td className="px-4 py-2 text-sm">10</td>
                <td className="px-4 py-2 text-sm">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    Low Stock
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">Tulsi Drops</td>
                <td className="px-4 py-2 text-sm">Medicinal</td>
                <td className="px-4 py-2 text-sm">0</td>
                <td className="px-4 py-2 text-sm">15</td>
                <td className="px-4 py-2 text-sm">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                    Out of Stock
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">Soil Enhancer</td>
                <td className="px-4 py-2 text-sm">Govigyan</td>
                <td className="px-4 py-2 text-sm">5</td>
                <td className="px-4 py-2 text-sm">25</td>
                <td className="px-4 py-2 text-sm">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                    Low Stock
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}