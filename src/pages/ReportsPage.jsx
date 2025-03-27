import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Calendar, Download } from "lucide-react";

import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardShell } from "../components/DashboardShell";
import { DateRangePicker } from "../components/DateRangePicker";
import { SalesReport } from "../components/SalesReport";
import { InventoryReport } from "../components/InventoryReport";

export default function ReportsPage() {
  const location = useLocation();

  const isActive = (path) => location.pathname === `/reports${path}`;

  return (
    <DashboardShell>
      <DashboardHeader heading="Reports" text="View and analyze your store performance.">
        <div className="flex items-center space-x-2">
          <DateRangePicker />
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Export
          </button>
        </div>
      </DashboardHeader>

      <div className="space-y-4">
        <div className="flex space-x-2">
          <Link
            to="/reports/sales"
            className={`px-3 py-1 rounded-md ${
              isActive("/sales") || isActive("")
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Sales Reports
          </Link>
          <Link
            to="/reports/inventory"
            className={`px-3 py-1 rounded-md ${
              isActive("/inventory") ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Inventory Reports
          </Link>
          <Link
            to="/reports/category-analysis"
            className={`px-3 py-1 rounded-md ${
              isActive("/category-analysis") ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Category Analysis
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="border border-gray-300 rounded-md overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <h4 className="text-sm font-medium">Total Sales</h4>
              <Calendar className="h-4 w-4 text-gray-500" />
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold">₹45,231.89</div>
              <p className="text-xs text-gray-500">+20.1% from previous period</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <h4 className="text-sm font-medium">Govigyan Sales</h4>
              <Calendar className="h-4 w-4 text-gray-500" />
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold">₹28,459.00</div>
              <p className="text-xs text-gray-500">+15.3% from previous period</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <h4 className="text-sm font-medium">Medicinal Sales</h4>
              <Calendar className="h-4 w-4 text-gray-500" />
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold">₹16,772.89</div>
              <p className="text-xs text-gray-500">+28.4% from previous period</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <h4 className="text-sm font-medium">Total Bills</h4>
              <Calendar className="h-4 w-4 text-gray-500" />
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-gray-500">+201 from previous period</p>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<SalesReport />} />
          <Route path="/sales" element={<SalesReport />} />
          <Route path="/inventory" element={<InventoryReport />} />
          <Route
            path="/category-analysis"
            element={
              <div className="border border-gray-300 rounded-md p-6">
                <h3 className="text-lg font-semibold">Category Analysis</h3>
                <p className="text-sm text-gray-500">
                  This section is under development. Check back later for detailed category analysis.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </DashboardShell>
  );
}