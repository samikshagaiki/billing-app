import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import BillingPage from "./pages/BillingPage";
import InventoryPage from "./pages/InventoryPage";
import AddProductPage from "./pages/AddProductPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/add" element={<AddProductPage />} />
        <Route path="/reports/*" element={<ReportsPage />}>
          <Route path="sales" element={<SalesReport />} />
          <Route path="inventory" element={<InventoryReport />} />
          <Route path="category-analysis" element={<div>Category Analysis Placeholder</div>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;