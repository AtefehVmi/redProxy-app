import React from "react";

interface StackedBarChartToolTipProps {
  active?: boolean;
  payload?: Array<any> | undefined;
  label?: string | number | undefined;
}

const StackedBarChartToolTip = ({
  active,
  payload,
  label,
}: StackedBarChartToolTipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black shadow-lg rounded-lg p-4">
        <p className="text-gray-100 font-semibold mb-2">{label}</p>
        <div className="space-y-1">
          {payload.map((entry, index) => (
            <div key={`item-${index}`} className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-gray-500">{entry.name}:</span>
              <span className="ml-1 font-medium">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default StackedBarChartToolTip;
