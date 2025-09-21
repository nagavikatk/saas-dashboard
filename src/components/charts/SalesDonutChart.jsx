import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../../contexts/ThemeContext';

const SalesDonutChart = () => {
  const { theme } = useContext(ThemeContext);

  const data = [
    { name: 'Direct', value: 300.56, color: '#95A4FC' },
    { name: 'Affiliate', value: 135.18, color: '#B1E3FF' },
    { name: 'Sponsored', value: 154.02, color: '#BAEDBD' },
    { name: 'E-mail', value: 48.96, color: theme === 'dark' ? '#C6C7F8' : '#1C1C1C' },
  ];

  return (
    <div className="rounded-xl">
      <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">Total Sales</h3>
      <div className="flex flex-col items-center">
        <div className="w-full h-44 relative">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                innerRadius={45}
                outerRadius={75}
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
        </div>
        <div className="w-full flex flex-col gap-3 pl-4">
          {data.map((entry) => (
            <div key={entry.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
                <p className="text-light-text-primary dark:text-dark-text-primary">{entry.name}</p>
              </div>
              <p className="font-semibold text-light-text-primary dark:text-dark-text-primary">${entry.value.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesDonutChart;