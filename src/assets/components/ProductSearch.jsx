import React, { useState } from "react";
import { Search } from "lucide-react";

const mockProducts = [
  { id: 1, name: "Organic Fertilizer", category: "govigyan", price: 299.99, stock: 50, tax: 5 },
  { id: 2, name: "Herbal Tea", category: "govigyan", price: 149.99, stock: 100, tax: 12 },
  { id: 3, name: "Seed Starter Kit", category: "govigyan", price: 399.99, stock: 30, tax: 18 },
  { id: 4, name: "Ayurvedic Pain Relief", category: "medicinal", price: 249.99, stock: 75, tax: 12 },
  { id: 5, name: "Herbal Immunity Booster", category: "medicinal", price: 499.99, stock: 40, tax: 5 },
  { id: 6, name: "Natural Sleep Aid", category: "medicinal", price: 199.99, stock: 60, tax: 18 },
];

export function ProductSearch({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      const results = mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.id.toString().includes(searchTerm)
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search products by name or ID..."
            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSearching ? "Searching..." : "Search"}
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-right">Price</th>
                <th className="p-2 text-right">Stock</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="p-2">{product.name}</td>
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
                  <td className="p-2 text-right">₹{product.price.toFixed(2)}</td>
                  <td className="p-2 text-right">{product.stock}</td>
                  <td className="p-2">
                    <button
                      onClick={() => onAddToCart(product)}
                      className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}