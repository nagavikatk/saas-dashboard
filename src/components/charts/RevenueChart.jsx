import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', revenue: 4000 },
  { day: 'Tue', revenue: 4500 },
  { day: 'Wed', revenue: 5000 },
  { day: 'Thu', revenue: 4800 },
  { day: 'Fri', revenue: 5200 },
  { day: 'Sat', revenue: 5500 },
  { day: 'Sun', revenue: 5700 }
];

const RevenueChart = () => {
  return (
    <div className="p-6 h-[400px]">
      <h3 className="text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">
        Weekly Revenue
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} fill="url(#colorRevenue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
