import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Direct', value: 35 },
  { name: 'Affiliate', value: 25 },
  { name: 'E-mail', value: 20 },
  { name: 'Other', value: 20 }
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#64748B'];

const SalesDonutChart = () => {
  return (
    <div className="p-6 h-[400px]">
      <h3 className="text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">
        Total Sales Distribution
      </h3>
      <PieChart width={400} height={300}>
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
        <Legend />
      </PieChart>
    </div>
  );
};

export default SalesDonutChart;
