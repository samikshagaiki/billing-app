import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import HomePage from "./pages/HomePage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import BillingPage from "./pages/BillingPage.jsx";
import InventoryPage from "./pages/InventoryPage.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";
import ReportsPage from "./pages/ReportsPage.jsx";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/add" element={<AddProductPage />} />
        <Route path="/reports/*" element={<ReportsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;