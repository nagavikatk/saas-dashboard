import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', projections: 40, actuals: 35 },
  { month: 'Feb', projections: 45, actuals: 42 },
  { month: 'Mar', projections: 50, actuals: 51 },
  { month: 'Apr', projections: 48, actuals: 43 },
  { month: 'May', projections: 52, actuals: 54 },
  { month: 'Jun', projections: 55, actuals: 52 }
];

const ProjectionsChart = () => {
  return (
    <div className="p-6 h-[300px]">
      <h3 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-4">
        Projections vs Actuals
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="projections" fill="#EFF6FF" stroke="#3B82F6" strokeWidth={1} />
          <Bar dataKey="actuals" fill="#F0FDF4" stroke="#10B981" strokeWidth={1} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsChart;
