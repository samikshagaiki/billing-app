import React from "react";
import { Calendar, Download } from "lucide-react";

import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardShell } from "../components/DashboardShell";
import { DateRangePicker } from "../components/DateRangePicker";
import { SalesReport } from "../components/SalesReport";
import { InventoryReport } from "../components/InventoryReport";

export default function ReportsPage() {
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
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md">Sales Reports</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md">Inventory Reports</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md">Category Analysis</button>
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
        <SalesReport />
      </div>
    </DashboardShell>
  );
}