import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

export function DashboardShell({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container">
      <header className="custom-header">
        <h1 className="logo">
          <Link to="/">Store Billing System</Link>
        </h1>
        <nav className="nav-right">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/billing" className="nav-link">Billing</Link>
          <Link to="/inventory" className="nav-link">Inventory</Link>
          <Link to="/reports" className="nav-link">Reports</Link>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="button outline theme-toggle"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <small>© 2024 Store Billing System. All rights reserved.</small>
      </footer>
    </div>
  );
}