import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
    <div className="container mx-auto py-10 px-4">
      <div className="mb-6">
        <Link to="/inventory" className="flex items-center text-sm text-gray-500 hover:text-gray-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Inventory
        </Link>
      </div>
      <div className="mx-auto max-w-2xl border border-gray-300 rounded-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Add New Product</h3>
          <p className="text-sm text-gray-500">Add a new product to your inventory. Fill in all the required details.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Product Category</label>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="govigyan" name="category" value="govigyan" defaultChecked />
                  <label htmlFor="govigyan">Govigyan</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="medicinal" name="category" value="medicinal" />
                  <label htmlFor="medicinal">Medicinal</label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Product Name</label>
              <input
                id="name"
                placeholder="Enter product name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="sku" className="text-sm font-medium">SKU/Product Code</label>
                <input
                  id="sku"
                  placeholder="Enter SKU"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="barcode" className="text-sm font-medium">Barcode (Optional)</label>
                <input
                  id="barcode"
                  placeholder="Enter barcode"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="price" className="text-sm font-medium">Price (₹)</label>
                <input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="stock" className="text-sm font-medium">Stock Quantity</label>
                <input
                  id="stock"
                  type="number"
                  min="0"
                  placeholder="0"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="tax" className="text-sm font-medium">Tax Rate (%)</label>
                <input
                  id="tax"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="18"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="hsn" className="text-sm font-medium">HSN/SAC Code</label>
                <input
                  id="hsn"
                  placeholder="Enter HSN/SAC code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">Description</label>
              <textarea
                id="description"
                placeholder="Enter product description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="p-6 flex justify-between border-t">
            <button
              type="button"
              onClick={() => navigate("/inventory")}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}