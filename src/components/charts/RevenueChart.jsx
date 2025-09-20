import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { day: 'Mon', current: 4000, previous: 3000 },
  { day: 'Tue', current: 4500, previous: 3800 },
  { day: 'Wed', current: 5000, previous: 4200 },
  { day: 'Thu', current: 4800, previous: 4500 },
  { day: 'Fri', current: 5200, previous: 4800 },
  { day: 'Sat', current: 5500, previous: 5000 },
  { day: 'Sun', current: 5700, previous: 5200 }
];

const RevenueChart = () => {
  return (
    <div className="p-6 h-[400px]">
      <h3 className="text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">
        Weekly Revenue
      </h3>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="current" stroke="#3B82F6" strokeWidth={2} />
        <Line type="monotone" dataKey="previous" stroke="#94A3B8" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default RevenueChart;
