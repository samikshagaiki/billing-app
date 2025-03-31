import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { DashboardHeader } from "../components/DashboardHeader.jsx";
import { DashboardShell } from "../components/DashboardShell.jsx";

export default function AddProductPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Product added");
      navigate("/inventory");
    }, 1000);
  };

  return (
    <DashboardShell>
      <DashboardHeader heading="Add Product" text="Add a new product to your inventory.">
        <Link to="/inventory" className="button outline custom-button">
          <ArrowLeft /> Back
        </Link>
      </DashboardHeader>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <article>
            <label>Product Category</label>
            <div className="group">
              <div className="flex items-center">
                <input type="radio" id="govigyan" name="category" value="govigyan" defaultChecked />
                <label htmlFor="govigyan">Govigyan</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="medicinal" name="category" value="medicinal" />
                <label htmlFor="medicinal">Medicinal</label>
              </div>
            </div>
          </article>
          <article>
            <label htmlFor="name">Product Name</label>
            <input
              id="name"
              placeholder="Enter product name"
              required
            />
          </article>
          <div className="grid">
            <article>
              <label htmlFor="sku">SKU/Product Code</label>
              <input
                id="sku"
                placeholder="Enter SKU"
                required
              />
            </article>
            <article>
              <label htmlFor="barcode">Barcode (Optional)</label>
              <input
                id="barcode"
                placeholder="Enter barcode"
              />
            </article>
          </div>
          <div className="grid">
            <article>
              <label htmlFor="price">Price (₹)</label>
              <input
                id="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                required
              />
            </article>
            <article>
              <label htmlFor="stock">Stock Quantity</label>
              <input
                id="stock"
                type="number"
                min="0"
                placeholder="0"
                required
              />
            </article>
          </div>
          <div className="grid">
            <article>
              <label htmlFor="tax">Tax Rate (%)</label>
              <input
                id="tax"
                type="number"
                min="0"
                step="0.01"
                placeholder="18"
                required
              />
            </article>
            <article>
              <label htmlFor="hsn">HSN/SAC Code</label>
              <input
                id="hsn"
                placeholder="Enter HSN/SAC code"
              />
            </article>
          </div>
          <article>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter product description"
            />
          </article>
          <footer className="group">
            <button
              type="button"
              onClick={() => navigate("/inventory")}
              className="button outline custom-button"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="button primary custom-button"
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </footer>
        </form>
      </div>
    </DashboardShell>
  );
}