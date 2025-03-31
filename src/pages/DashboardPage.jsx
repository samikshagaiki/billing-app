import React from "react";
import { Link } from "react-router-dom";
import { Package, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { DashboardHeader } from "../components/DashboardHeader.jsx";
import { DashboardShell } from "../components/DashboardShell.jsx";
import { Overview } from "../components/Overview.jsx";
import { RecentSales } from "../components/RecentSales.jsx";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Overview of your store performance and recent activity." />
      <div className="grid">
        <article>
          <header>
            <h4>Total Revenue</h4>
            <TrendingUp />
          </header>
          <p>
            <strong>₹45,231.89</strong>
          </p>
          <small>+20.1% from last month</small>
        </article>
        <article>
          <header>
            <h4>Customers</h4>
            <Users />
          </header>
          <p>
            <strong>2350</strong>
          </p>
          <small>+180 from last month</small>
        </article>
        <article>
          <header>
            <h4>Sales</h4>
            <ShoppingCart />
          </header>
          <p>
            <strong>573</strong>
          </p>
          <small>+201 from last month</small>
        </article>
        <article>
          <header>
            <h4>Products</h4>
            <Package />
          </header>
          <p>
            <strong>142</strong>
          </p>
          <small>Active products in inventory</small>
        </article>
      </div>
      <div className="grid">
        <Overview />
        <RecentSales />
      </div>
    </DashboardShell>
  );
}