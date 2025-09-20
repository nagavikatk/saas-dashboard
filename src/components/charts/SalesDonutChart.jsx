import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Direct', value: 35 },
  { name: 'Affiliate', value: 25 },
  { name: 'E-mail', value: 20 },
  { name: 'Other', value: 20 }
];

const COLORS = ['#60A5FA', '#4ADE80', '#FACC15', '#94A3B8'];

const SalesDonutChart = () => {
  const totalSales = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="p-6 h-[400px]">
      <h3 className="text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">
        Total Sales Distribution
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
            {totalSales}%
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesDonutChart;
