import React, { useState } from "react";
import { Calendar } from "lucide-react";

export function DateRangePicker({ onDateChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    start: new Date(new Date().setDate(new Date().getDate() - 30)),  // Default to last 30 days
    end: new Date()
  });

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleApply = () => {
    if (onDateChange) {
      onDateChange(dateRange);
    }
    setIsOpen(false);
  };

  // Predefined date ranges
  const predefinedRanges = [
    { label: 'Today', days: 0 },
    { label: 'Yesterday', days: 1 },
    { label: 'Last 7 Days', days: 7 },
    { label: 'Last 30 Days', days: 30 },
    { label: 'This Month', custom: true },
    { label: 'Last Month', custom: true }
  ];

  const applyPredefinedRange = (range) => {
    let end = new Date();
    let start = new Date();
    
    if (range.custom) {
      if (range.label === 'This Month') {
        start = new Date(end.getFullYear(), end.getMonth(), 1);
      } else if (range.label === 'Last Month') {
        start = new Date(end.getFullYear(), end.getMonth() - 1, 1);
        end = new Date(end.getFullYear(), end.getMonth(), 0);
      }
    } else {
      start = new Date(end);
      start.setDate(end.getDate() - range.days);
      if (range.days === 1) { // Yesterday
        end = new Date(start);
      }
    }
    
    setDateRange({ start, end });
  };

  return (
    <div className="relative">
      <button 
        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calendar className="mr-2 h-4 w-4" />
        {formatDate(dateRange.start)} - {formatDate(dateRange.end)}
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <div className="p-3 border-b">
            <h3 className="font-medium">Date Range</h3>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {predefinedRanges.map((range, index) => (
                <button
                  key={index}
                  className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                  onClick={() => applyPredefinedRange(range)}
                >
                  {range.label}
                </button>
              ))}
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1">Start Date</label>
                <input 
                  type="date" 
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                  value={dateRange.start.toISOString().split('T')[0]}
                  onChange={(e) => setDateRange({...dateRange, start: new Date(e.target.value)})}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">End Date</label>
                <input 
                  type="date" 
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                  value={dateRange.end.toISOString().split('T')[0]}
                  onChange={(e) => setDateRange({...dateRange, end: new Date(e.target.value)})}
                />
              </div>
            </div>
            
            <div className="mt-4 flex justify-end space-x-2">
              <button 
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleApply}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}