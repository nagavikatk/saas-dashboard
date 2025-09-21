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
    <div className="flex flex-col items-start w-full">
      <h3 className="text-lg font-medium text-dark dark:text-dark-text-secondary mb-4">
        Projections vs Actuals
      </h3>
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={20} barGap={-20}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="projections" fill="#cedeea" />
            <Bar dataKey="actuals" fill="#a8c4d9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionsChart;
