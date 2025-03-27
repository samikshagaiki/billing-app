import React from "react";
import { Link } from "react-router-dom";

export function DashboardShell({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Store Billing System
          </Link>
          <nav className="ml-auto flex gap-4">
            <Link to="/dashboard" className="text-sm font-medium hover:underline">
              Dashboard
            </Link>
            <Link to="/billing" className="text-sm font-medium hover:underline">
              Billing
            </Link>
            <Link to="/inventory" className="text-sm font-medium hover:underline">
              Inventory
            </Link>
            <Link to="/reports" className="text-sm font-medium hover:underline">
              Reports
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto py-6 space-y-6 px-4">{children}</main>
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