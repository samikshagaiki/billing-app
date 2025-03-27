import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";

export function DateRangePicker() {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="grid gap-2">
      <div className="relative">
        <button
          id="date"
          className="w-[300px] flex items-center justify-start border border-gray-300 rounded-md px-3 py-2 text-left font-normal text-gray-700 hover:bg-gray-100"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              `${format(date.from, "LLL dd, y")} - ${format(date.to, "LLL dd, y")}`
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </button>
        <div className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg p-4 mt-1 w-auto">
          <div className="text-center text-gray-700">
            Calendar component would go here (simplified for Tailwind).
          </div>
        </div>
      </div>
    </div>
  );
}