import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardShell } from "../components/DashboardShell";
import { ProductsTable } from "../components/ProductsTable";

export default function InventoryPage() {
  // Add state to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Function to handle category button clicks
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <DashboardShell>
      <DashboardHeader heading="Inventory" text="Manage your product inventory for both categories.">
        <Link to="/inventory/add" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Product
        </Link>
      </DashboardHeader>
      <div className="space-y-4">
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 rounded-md ${selectedCategory === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => handleCategoryChange("all")}
          >
            All Products
          </button>
          <button 
            className={`px-3 py-1 rounded-md ${selectedCategory === "govigyan" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => handleCategoryChange("govigyan")}
          >
            Govigyan Products
          </button>
          <button 
            className={`px-3 py-1 rounded-md ${selectedCategory === "medicinal" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => handleCategoryChange("medicinal")}
          >
            Medicinal Products
          </button>
          <button 
            className={`px-3 py-1 rounded-md ${selectedCategory === "lowStock" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => handleCategoryChange("lowStock")}
          >
            Low Stock
          </button>
        </div>
        <ProductsTable category={selectedCategory} />
      </div>
    </DashboardShell>
  );
}