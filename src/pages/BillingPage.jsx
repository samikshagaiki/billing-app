import React, { useState, useRef } from "react";
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
  const [billGenerated, setBillGenerated] = useState(false);
  const [billNumber, setBillNumber] = useState("");
  const [billDate, setBillDate] = useState("");
  const printRef = useRef(null);

  const handleAddToCart = (product) => {
    if (product.category === "govigyan") {
      setGovigyanCart([...govigyanCart, { ...product, quantity: 1 }]);
    } else {
      setMedicinalCart([...medicinalCart, { ...product, quantity: 1 }]);
    }
    console.log(`${product.name} added to ${product.category} cart`);
    setBillGenerated(false);
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
    setBillGenerated(false);
  };

  const handleRemoveItem = (index, category) => {
    if (category === "govigyan") {
      setGovigyanCart(govigyanCart.filter((_, i) => i !== index));
    } else {
      setMedicinalCart(medicinalCart.filter((_, i) => i !== index));
    }
    setBillGenerated(false);
  };

  const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity * (item.tax || 18)) / 100, 0);
  };

  const generateBillNumber = () => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `BILL-${year}${month}${day}-${random}`;
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  const handleGenerateBill = () => {
    if (!customerName || !customerPhone) {
      alert("Please enter customer name and phone number");
      return;
    }
    
    const currentCart = activeTab === "govigyan" ? govigyanCart : medicinalCart;
    if (currentCart.length === 0) {
      alert("Please add at least one product to the cart");
      return;
    }

    // Generate bill number and date
    const newBillNumber = generateBillNumber();
    const newBillDate = formatDate(new Date());
    
    setBillNumber(newBillNumber);
    setBillDate(newBillDate);
    setBillGenerated(true);
    
    console.log(`Bill ${newBillNumber} generated for ${customerName}`);
    
    // In a real application, you would save the bill to a database here
    const billData = {
      billNumber: newBillNumber,
      billDate: newBillDate,
      customerName,
      customerPhone,
      govigyanItems: govigyanCart,
      medicinalItems: medicinalCart,
      activeTab,
      govigyanTotal: calculateTotal(govigyanCart) + calculateTax(govigyanCart),
      medicinalTotal: calculateTotal(medicinalCart) + calculateTax(medicinalCart)
    };
    
    // Log the bill data for now
    console.log("Bill Data:", billData);
    
    // You could send this data to an API endpoint to save it
    // Example: saveToDatabase(billData);
  };

  const handlePrintBill = () => {
    if (!billGenerated) {
      alert("Please generate a bill first");
      return;
    }
  
    // const printContent = printRef.current;
    
    // Create a print-friendly version
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print Bill</title>');
    printWindow.document.write('<style>');
    printWindow.document.write(`
      body { font-family: Arial, sans-serif; padding: 20px; }
      .bill-header { text-align: center; margin-bottom: 20px; }
      .bill-info { display: flex; justify-content: space-between; margin-bottom: 20px; }
      table { width: 100%; border-collapse: collapse; }
      th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
      th { background-color: #f2f2f2; }
      .totals { margin-top: 20px; text-align: right; }
    `);
    printWindow.document.write('</style></head><body>');
    
    // Create the bill content
    printWindow.document.write(`
      <div class="bill-header">
        <h1>INVOICE</h1>
        <h2>${activeTab === "govigyan" ? "Govigyan Products" : "Medicinal Products"}</h2>
      </div>
      <div class="bill-info">
        <div>
          <p><strong>Bill #:</strong> ${billNumber}</p>
          <p><strong>Date:</strong> ${billDate}</p>
        </div>
        <div>
          <p><strong>Customer:</strong> ${customerName}</p>
          <p><strong>Phone:</strong> ${customerPhone}</p>
        </div>
      </div>
    `);
    
    // Add the table of products
    const currentCart = activeTab === "govigyan" ? govigyanCart : medicinalCart;
    printWindow.document.write(`
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Tax Rate</th>
            <th>Tax</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
    `);
    
    currentCart.forEach(item => {
      const taxAmount = (item.price * item.quantity * (item.tax || 18)) / 100;
      const total = item.price * item.quantity + taxAmount;
      
      printWindow.document.write(`
        <tr>
          <td>${item.name}</td>
          <td>₹${item.price.toFixed(2)}</td>
          <td>${item.quantity}</td>
          <td>${item.tax || 18}%</td>
          <td>₹${taxAmount.toFixed(2)}</td>
          <td>₹${total.toFixed(2)}</td>
        </tr>
      `);
    });
    
    printWindow.document.write('</tbody></table>');
    
    // Add the totals
    const subtotal = calculateTotal(currentCart);
    const tax = calculateTax(currentCart);
    const total = subtotal + tax;
    
    printWindow.document.write(`
      <div class="totals">
        <p><strong>Subtotal:</strong> ₹${subtotal.toFixed(2)}</p>
        <p><strong>Tax:</strong> ₹${tax.toFixed(2)}</p>
        <p><strong>Total:</strong> ₹${total.toFixed(2)}</p>
      </div>
      <div style="margin-top: 50px; text-align: center;">
        <p>Thank you for your business!</p>
      </div>
    `);
    
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    
    // Wait for content to load then print
    printWindow.onload = function() {
      printWindow.focus();
      printWindow.print();
      // Don't close the window to allow user to use browser print dialog
    };
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
              setBillGenerated(false);
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
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      setBillGenerated(false);
                    }}
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
                    onChange={(e) => {
                      setCustomerPhone(e.target.value);
                      setBillGenerated(false);
                    }}
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

          {billGenerated && (
            <div className="border border-gray-300 rounded-md overflow-hidden bg-green-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-green-700">Bill Generated</h3>
                <p className="text-sm text-green-600">Bill has been successfully generated.</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Bill Number</p>
                    <p className="text-lg font-bold">{billNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-lg font-bold">{billDate}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border border-gray-300 rounded-md overflow-hidden flex flex-col h-full" ref={printRef}>
          <div className="p-6">
            <h3 className="text-lg font-semibold">Bill Details</h3>
            <p className="text-sm text-gray-500">Products added to the current bill.</p>
          </div>
          <div className="px-6">
            <div className="flex w-full">
              <button
                onClick={() => {
                  setActiveTab("govigyan");
                  setBillGenerated(false);
                }}
                className={`flex-1 py-2 text-center rounded-t-md ${
                  activeTab === "govigyan" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Govigyan Products
              </button>
              <button
                onClick={() => {
                  setActiveTab("medicinal");
                  setBillGenerated(false);
                }}
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
                setBillGenerated(false);
                console.log(`${activeTab} cart cleared`);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Clear Cart
            </button>
            <div className="flex space-x-2">
              <button 
                onClick={handlePrintBill}
                disabled={!billGenerated}
                className={`px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex items-center ${!billGenerated ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
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