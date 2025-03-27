import React from "react";
import { Link } from "react-router-dom";
import { Package, ShoppingCart, TrendingUp, Users } from "lucide-react";

import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardShell } from "../components/DashboardShell";
import { RecentSales } from "../components/RecentSales";
import { Overview } from "../components/Overview";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Overview of your store performance and recent activities.">
        <Link to="/billing" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          New Bill
        </Link>
      </DashboardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <h4 className="text-sm font-medium">Total Revenue</h4>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold">₹45,231.89</div>
            <p className="text-xs text-gray-500">+20.1% from last month</p>
          </div>
        </div>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <h4 className="text-sm font-medium">Sales</h4>
            <ShoppingCart className="h-4 w-4 text-gray-500" />
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-gray-500">+201 since last week</p>
          </div>
        </div>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <h4 className="text-sm font-medium">Products</h4>
            <Package className="h-4 w-4 text-gray-500" />
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold">238</div>
            <p className="text-xs text-gray-500">86 need restocking</p>
          </div>
        </div>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <h4 className="text-sm font-medium">Customers</h4>
            <Users className="h-4 w-4 text-gray-500" />
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-gray-500">+180 since last month</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md">Overview</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md">Govigyan Products</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md">Medicinal Products</button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4 border border-gray-300 rounded-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold">Sales Overview</h3>
            </div>
            <div className="p-2">
              <Overview />
            </div>
          </div>
          <div className="col-span-3 border border-gray-300 rounded-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold">Recent Sales</h3>
              <p className="text-sm text-gray-500">You made 265 sales this month.</p>
            </div>
            <div className="p-6">
              <RecentSales />
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}