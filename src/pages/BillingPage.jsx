import React, { useState } from "react";
import { Printer, Save, ShoppingCart, Trash2 } from "lucide-react";

import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardShell } from "../components/DashboardShell";
import { ProductSearch } from "../components/ProductSearch";

export default function BillingPage() {
  const [govigyanCart, setGovigyanCart] = useState([]);
  const [medicinalCart, setMedicinalCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [activeTab, setActiveTab] = useState("govigyan");

  const handleAddToCart = (product) => {
    if (product.category === "govigyan") {
      setGovigyanCart([...govigyanCart, { ...product, quantity: 1 }]);
    } else {
      setMedicinalCart([...medicinalCart, { ...product, quantity: 1 }]);
    }
    console.log(`${product.name} added to ${product.category} cart`);
  };

  const handleQuantityChange = (index, value, category) => {
    if (category === "govigyan") {
      const updatedCart = [...govigyanCart];
      updatedCart[index].quantity = value;
      setGovigyanCart(updatedCart);
    } else {
      const updatedCart = [...medicinalCart];
      updatedCart[index].quantity = value;
      setMedicinalCart(updatedCart);
    }
  };

  const handleRemoveItem = (index, category) => {
    if (category === "govigyan") {
      setGovigyanCart(govigyanCart.filter((_, i) => i !== index));
    } else {
      setMedicinalCart(medicinalCart.filter((_, i) => i !== index));
    }
  };

  const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity * (item.tax || 18)) / 100, 0);
  };

  const handleGenerateBill = () => {
    if (!customerName || !customerPhone) {
      console.log("Missing customer info");
      return;
    }
    if (
      (activeTab === "govigyan" && govigyanCart.length === 0) ||
      (activeTab === "medicinal" && medicinalCart.length === 0)
    ) {
      console.log("Empty cart");
      return;
    }
    console.log(`Bill generated for ${customerName}`);
  };

  return (
    <DashboardShell>
      <DashboardHeader heading="Billing" text="Create and manage bills for your customers.">
        <div className="flex space-x-2">
          <button
            onClick={() => {
              setGovigyanCart([]);
              setMedicinalCart([]);
              setCustomerName("");
              setCustomerPhone("");
              console.log("Cart cleared");
            }}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Clear All
          </button>
          <button
            onClick={handleGenerateBill}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Generate Bill
          </button>
        </div>
      </DashboardHeader>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="border border-gray-300 rounded-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold">Customer Information</h3>
              <p className="text-sm text-gray-500">Enter customer details for the bill.</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Customer Name
                  </label>
                  <input
                    id="name"
                    placeholder="Enter customer name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    placeholder="Enter phone number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold">Add Products</h3>
              <p className="text-sm text-gray-500">Search and add products to the bill.</p>
            </div>
            <div className="p-6">
              <ProductSearch onAddToCart={handleAddToCart} />
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md overflow-hidden flex flex-col h-full">
          <div className="p-6">
            <h3 className="text-lg font-semibold">Bill Details</h3>
            <p className="text-sm text-gray-500">Products added to the current bill.</p>
          </div>
          <div className="px-6">
            <div className="flex w-full">
              <button
                onClick={() => setActiveTab("govigyan")}
                className={`flex-1 py-2 text-center rounded-t-md ${
                  activeTab === "govigyan" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Govigyan Products
              </button>
              <button
                onClick={() => setActiveTab("medicinal")}
                className={`flex-1 py-2 text-center rounded-t-md ${
                  activeTab === "medicinal" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Medicinal Products
              </button>
            </div>
          </div>

          {activeTab === "govigyan" && (
            <div className="flex-1 flex flex-col px-6 pt-2">
              <div className="flex-1 overflow-auto">
                {govigyanCart.length > 0 ? (
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">Product</th>
                        <th className="p-2 text-right w-24">Price</th>
                        <th className="p-2 text-center w-24">Qty</th>
                        <th className="p-2 text-right w-24">Total</th>
                        <th className="p-2 w-12"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {govigyanCart.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="p-2">{item.name}</td>
                          <td className="p-2 text-right">₹{item.price.toFixed(2)}</td>
                          <td className="p-2 text-center">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(index, Number.parseInt(e.target.value) || 1, "govigyan")
                              }
                              className="w-16 h-8 text-center border border-gray-300 rounded-md mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </td>
                          <td className="p-2 text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                          <td className="p-2">
                            <button
                              onClick={() => handleRemoveItem(index, "govigyan")}
                              className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="flex flex-col items-center justify-center h-40 text-center">
                    <ShoppingCart className="h-10 w-10 text-gray-500 mb-4" />
                    <p className="text-gray-500">No products added yet</p>
                    <p className="text-sm text-gray-500">Search and add Govigyan products to the bill</p>
                  </div>
                )}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{calculateTotal(govigyanCart).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹{calculateTax(govigyanCart).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{(calculateTotal(govigyanCart) + calculateTax(govigyanCart)).toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "medicinal" && (
            <div className="flex-1 flex flex-col px-6 pt-2">
              <div className="flex-1 overflow-auto">
                {medicinalCart.length > 0 ? (
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">Product</th>
                        <th className="p-2 text-right w-24">Price</th>
                        <th className="p-2 text-center w-24">Qty</th>
                        <th className="p-2 text-right w-24">Total</th>
                        <th className="p-2 w-12"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicinalCart.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="p-2">{item.name}</td>
                          <td className="p-2 text-right">₹{item.price.toFixed(2)}</td>
                          <td className="p-2 text-center">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(index, Number.parseInt(e.target.value) || 1, "medicinal")
                              }
                              className="w-16 h-8 text-center border border-gray-300 rounded-md mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </td>
                          <td className="p-2 text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                          <td className="p-2">
                            <button
                              onClick={() => handleRemoveItem(index, "medicinal")}
                              className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="flex flex-col items-center justify-center h-40 text-center">
                    <ShoppingCart className="h-10 w-10 text-gray-500 mb-4" />
                    <p className="text-gray-500">No products added yet</p>
                    <p className="text-sm text-gray-500">Search and add Medicinal products to the bill</p>
                  </div>
                )}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{calculateTotal(medicinalCart).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹{calculateTax(medicinalCart).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{(calculateTotal(medicinalCart) + calculateTax(medicinalCart)).toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="border-t p-6 flex justify-between">
            <button
              onClick={() => {
                if (activeTab === "govigyan") setGovigyanCart([]);
                else setMedicinalCart([]);
                console.log(`${activeTab} cart cleared`);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Clear Cart
            </button>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex items-center">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </button>
              <button
                onClick={handleGenerateBill}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
              >
                <Save className="mr-2 h-4 w-4" />
                Generate Bill
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}