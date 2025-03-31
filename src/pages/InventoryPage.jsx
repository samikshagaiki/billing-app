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
      <div className="flex flex-wrap">
  <button 
    className={`category-button ${selectedCategory === "all" ? "selected" : ""}`}
    onClick={() => handleCategoryChange("all")}
  >
    All Products
  </button>
  <button 
    className={`category-button ${selectedCategory === "govigyan" ? "selected" : ""}`}
    onClick={() => handleCategoryChange("govigyan")}
  >
    Govigyan Products
  </button>
  <button 
    className={`category-button ${selectedCategory === "medicinal" ? "selected" : ""}`}
    onClick={() => handleCategoryChange("medicinal")}
  >
    Medicinal Products
  </button>
  <button 
    className={`category-button ${selectedCategory === "lowStock" ? "selected" : ""}`}
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