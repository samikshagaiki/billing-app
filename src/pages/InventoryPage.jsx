import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardShell } from "../components/DashboardShell";
import { ProductsTable } from "../components/ProductsTable";

export default function InventoryPage() {
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
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md">All Products</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md">Govigyan Products</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md">Medicinal Products</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md">Low Stock</button>
        </div>
        <ProductsTable category="all" />
      </div>
    </DashboardShell>
  );
}