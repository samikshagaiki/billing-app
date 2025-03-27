import React from "react";

export function RecentSales() {
  return (
    <div className="space-y-8">
      {[
        { name: "John Doe", email: "john.doe@example.com", amount: "₹1,999.00", initial: "JD" },
        { name: "Sarah Davis", email: "sarah.davis@example.com", amount: "₹1,499.00", initial: "SD" },
        { name: "Rahul Patel", email: "rahul.patel@example.com", amount: "₹699.00", initial: "RP" },
        { name: "Ananya Singh", email: "ananya.singh@example.com", amount: "₹3,899.00", initial: "AS" },
        { name: "Manish Kumar", email: "manish.kumar@example.com", amount: "₹899.00", initial: "MK" },
      ].map((sale, index) => (
        <div key={index} className="flex items-center">
          <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <span className="text-sm font-medium">{sale.initial}</span>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">{sale.name}</p>
            <p className="text-sm text-gray-500">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">{sale.amount}</div>
        </div>
      ))}
    </div>
  );
}