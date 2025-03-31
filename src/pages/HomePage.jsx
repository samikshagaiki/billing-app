import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, BarChart3, ClipboardList, Package } from "lucide-react";
import { useTheme } from "next-themes";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="container">
      <header className="custom-header">
        <h1 className="logo">
          <Link to="/">Store Billing System</Link>
        </h1>
        <nav className="nav-right">
          <Link to="/dashboard" className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`}>
            Dashboard
          </Link>
          <Link to="/billing" className={`nav-link ${location.pathname === "/billing" ? "active" : ""}`}>
            Billing
          </Link>
          <Link to="/inventory" className={`nav-link ${location.pathname.startsWith("/inventory") ? "active" : ""}`}>
            Inventory
          </Link>
          <Link to="/reports" className={`nav-link ${location.pathname.startsWith("/reports") ? "active" : ""}`}>
            Reports
          </Link>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="button outline theme-toggle custom-button"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </nav>
      </header>

      <main>
        <section>
          <article className="grid text-center">
            <h2>Store Management System</h2>
            <p>Manage your store inventory and generate bills for Govigyan and medicinal products.</p>
            <footer className="group">
              <Link to="/billing" className="button primary custom-button">
                Start Billing <ArrowRight />
              </Link>
              <Link to="/inventory" className="button outline custom-button">
                Manage Inventory
              </Link>
            </footer>
          </article>
        </section>

        <section className="contrast">
          <div className="grid">
            <article>
              <header>
                <Package />
                <h3>Inventory Management</h3>
              </header>
              <p>
                <small>Keep track of your products across both Govigyan and medicinal categories.</small>
              </p>
              <p>
                Add, edit, and manage your product inventory with ease. Set stock levels, prices, and categories.
              </p>
              <footer>
                <Link to="/inventory" className="button primary custom-button">
                  Manage Inventory
                </Link>
              </footer>
            </article>

            <article>
              <header>
                <ClipboardList />
                <h3>Billing System</h3>
              </header>
              <p>
                <small>Generate separate bills for Govigyan and medicinal products.</small>
              </p>
              <p>
                Create professional bills, apply discounts, and maintain a complete sales history for both product categories.
              </p>
              <footer>
                <Link to="/billing" className="button primary custom-button">
                  Create Bill
                </Link>
              </footer>
            </article>

            <article>
              <header>
                <BarChart3 />
                <h3>Reports & Analytics</h3>
              </header>
              <p>
                <small>Get insights into your sales and inventory.</small>
              </p>
              <p>
                View sales reports, track popular products, and analyze performance across both product categories.
              </p>
              <footer>
                <Link to="/reports" className="button primary custom-button">
                  View Reports
                </Link>
              </footer>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <small>© 2024 Store Billing System. All rights reserved.</small>
      </footer>
    </div>
  );
}