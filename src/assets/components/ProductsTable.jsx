import React, { useState } from "react";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";

const mockProducts = [
  { id: 1, name: "Organic Fertilizer", category: "govigyan", price: 299.99, stock: 50, sku: "GOV-001" },
  { id: 2, name: "Herbal Tea", category: "govigyan", price: 149.99, stock: 100, sku: "GOV-002" },
  { id: 3, name: "Seed Starter Kit", category: "govigyan", price: 399.99, stock: 30, sku: "GOV-003" },
  { id: 4, name: "Ayurvedic Pain Relief", category: "medicinal", price: 249.99, stock: 75, sku: "MED-001" },
  { id: 5, name: "Herbal Immunity Booster", category: "medicinal", price: 499.99, stock: 40, sku: "MED-002" },
  { id: 6, name: "Natural Sleep Aid", category: "medicinal", price: 199.99, stock: 60, sku: "MED-003" },
  { id: 7, name: "Organic Plant Food", category: "govigyan", price: 199.99, stock: 5, sku: "GOV-004" },
  { id: 8, name: "Herbal Digestive Aid", category: "medicinal", price: 299.99, stock: 8, sku: "MED-004" },
];

export function ProductsTable({ category }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory =
      category === "all"
        ? true
        : category === "low-stock"
        ? product.stock < 10
        : product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <input
          placeholder="Search products..."
          className="max-w-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            Export
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add Product
          </button>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 w-12">
                <input type="checkbox" className="h-4 w-4" />
              </th>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">SKU</th>
              <th className="p-2 text-right">Price</th>
              <th className="p-2 text-right">Stock</th>
              <th className="p-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-2">
                  <input type="checkbox" className="h-4 w-4" />
                </td>
                <td className="p-2 font-medium">{product.name}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      product.category === "govigyan"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {product.category === "govigyan" ? "Govigyan" : "Medicinal"}
                  </span>
                </td>
                <td className="p-2">{product.sku}</td>
                <td className="p-2 text-right">₹{product.price.toFixed(2)}</td>
                <td className="p-2 text-right">
                  <span className={product.stock < 10 ? "text-red-500 font-medium" : ""}>
                    {product.stock}
                  </span>
                </td>
                <td className="p-2 text-right">
                  <div className="relative inline-block group">
                    <button className="h-8 w-8 p-0 flex items-center justify-center hover:bg-gray-100 rounded-full">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10 hidden group-hover:block">
                      <div className="p-2 text-sm text-gray-700">View details</div>
                      <div className="p-2 text-sm text-gray-700 flex items-center">
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </div>
                      <div className="p-2 text-sm text-red-600 flex items-center">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}