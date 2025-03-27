import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, ClipboardList, Package } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center px-4">
          <h1 className="text-2xl font-bold tracking-tight">Store Billing System</h1>
          <nav className="ml-auto flex gap-4">
            <Link to="/dashboard" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Dashboard
            </Link>
            <Link to="/billing" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Billing
            </Link>
            <Link to="/inventory" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Inventory
            </Link>
            <Link to="/reports" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Reports
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Store Management System
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Manage your store inventory and generate bills for Govigyan and medicinal products.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/billing" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                  Start Billing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/inventory" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
                  Manage Inventory
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="p-6">
                  <Package className="h-6 w-6 mb-2" />
                  <h3 className="text-lg font-semibold">Inventory Management</h3>
                  <p className="text-sm text-gray-500">
                    Keep track of your products across both Govigyan and medicinal categories.
                  </p>
                  <p className="mt-2">
                    Add, edit, and manage your product inventory with ease. Set stock levels, prices, and categories.
                  </p>
                </div>
                <div className="p-6">
                  <Link to="/inventory" className="w-full block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center">
                    Manage Inventory
                  </Link>
                </div>
              </div>
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="p-6">
                  <ClipboardList className="h-6 w-6 mb-2" />
                  <h3 className="text-lg font-semibold">Billing System</h3>
                  <p className="text-sm text-gray-500">
                    Generate separate bills for Govigyan and medicinal products.
                  </p>
                  <p className="mt-2">
                    Create professional bills, apply discounts, and maintain a complete sales history for both product categories.
                  </p>
                </div>
                <div className="p-6">
                  <Link to="/billing" className="w-full block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center">
                    Create Bill
                  </Link>
                </div>
              </div>
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="p-6">
                  <BarChart3 className="h-6 w-6 mb-2" />
                  <h3 className="text-lg font-semibold">Reports & Analytics</h3>
                  <p className="text-sm text-gray-500">
                    Get insights into your sales and inventory.
                  </p>
                  <p className="mt-2">
                    View sales reports, track popular products, and analyze performance across both product categories.
                  </p>
                </div>
                <div className="p-6">
                  <Link to="/reports" className="w-full block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center">
                    View Reports
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2024 Store Billing System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}