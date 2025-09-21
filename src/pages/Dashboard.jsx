import StatsCard from '../components/common/StatsCard';
import ProjectionsChart from '../components/charts/ProjectionsChart';
import RevenueChart from '../components/charts/RevenueChart';
import WorldMapChart from '../components/charts/WorldMapChart';
import DataTable from '../components/common/DataTable';
import SalesDonutChart from '../components/charts/SalesDonutChart';
import Card from '../components/common/Card';
import { topSellingProducts } from '../data/mockData';

const Dashboard = () => {
  const statsData = [
    { title: 'Customers', value: '3,781', change: '+11.01%', isPositive: true },
    { title: 'Orders', value: '1,219', change: '-0.03%', isPositive: false },
    { title: 'Revenue', value: '$695', change: '+15.03%', isPositive: true },
    { title: 'Growth', value: '30.1%', change: '+14.98%', isPositive: true }
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'price', label: 'Price' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'amount', label: 'Amount' }
  ];

  return (
    <main className="flex-1 p-6 bg-light-bg">
      {/* The 3x2 grid of dashboard components will go here */}
      {/* First Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-6">
            {statsData.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Card>
            <ProjectionsChart />
          </Card>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[70%]">
          <Card>
            <RevenueChart />
          </Card>
        </div>
        <div className="w-full lg:w-[30%]">
          <Card>
            <WorldMapChart />
          </Card>
        </div>
      </div>

      {/* Third Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[70%]">
          <Card>
            <DataTable 
              columns={columns}
              data={topSellingProducts}
              title="Top Selling Products"
            />
          </Card>
        </div>
        <div className="w-full lg:w-[30%]">
          <Card>
            <SalesDonutChart />
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
