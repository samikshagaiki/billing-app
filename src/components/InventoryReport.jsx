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

const inventoryData = [
  { category: "Govigyan", total: 142, inStock: 120, lowStock: 15, outOfStock: 7 },
  { category: "Medicinal", total: 96, inStock: 80, lowStock: 9, outOfStock: 7 },
];

const lowStockItems = [
  { id: 1, name: "Organic Fertilizer", category: "govigyan", stock: 5, reorderLevel: 10 },
  { id: 2, name: "Herbal Immunity Booster", category: "medicinal", stock: 8, reorderLevel: 15 },
  { id: 3, name: "Organic Plant Food", category: "govigyan", stock: 3, reorderLevel: 10 },
  { id: 4, name: "Herbal Digestive Aid", category: "medicinal", stock: 4, reorderLevel: 12 },
  { id: 5, name: "Natural Pesticide", category: "govigyan", stock: 6, reorderLevel: 15 },
];

export function InventoryReport() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Inventory Status</h3>
          <p className="text-sm text-gray-500">Current inventory status by product category.</p>
        </div>
        <div className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={inventoryData} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" width={100} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="inStock" name="In Stock" stackId="a" fill="#4f46e5" />
              <Bar dataKey="lowStock" name="Low Stock" stackId="a" fill="#f59e0b" />
              <Bar dataKey="outOfStock" name="Out of Stock" stackId="a" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="border border-gray-300 rounded-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Low Stock Items</h3>
          <p className="text-sm text-gray-500">Products that need to be restocked soon.</p>
        </div>
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-right">Stock</th>
                <th className="p-2 text-right">Reorder Level</th>
              </tr>
            </thead>
            <tbody>
              {lowStockItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2 font-medium">{item.name}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.category === "govigyan"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.category === "govigyan" ? "Govigyan" : "Medicinal"}
                    </span>
                  </td>
                  <td className="p-2 text-right text-red-500 font-medium">{item.stock}</td>
                  <td className="p-2 text-right">{item.reorderLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}