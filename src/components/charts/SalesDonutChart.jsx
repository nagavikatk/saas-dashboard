import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Direct', value: 300.56, color: '#10B981' },
  { name: 'Affiliate', value: 135.18, color: '#3B82F6' },
  { name: 'Sponsored', value: 154.02, color: '#8B5CF6' },
  { name: 'E-mail', value: 48.96, color: '#06B6D4' },
];

const SalesDonutChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
      <h3 className="text-lg font-semibold text-dark mb-4">Total Sales</h3>
      <div className="flex items-center">
        <div className="w-1/2 h-48 relative"> {/* Add relative positioning */}
          <ResponsiveContainer>
            <PieChart>
              <Pie
                // Adjust radius to make the donut thicker
                innerRadius={50}
                outerRadius={70}
                data={data}
                cx="50%"
                cy="50%"
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-dark">36.6%</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-3 pl-4">
          {data.map((entry) => (
            <div key={entry.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
                <p className="text-gray">{entry.name}</p>
              </div>
              <p className="font-semibold text-dark">${entry.value.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesDonutChart;