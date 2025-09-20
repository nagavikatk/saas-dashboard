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
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <RevenueChart />
          </Card>
        </div>
        <div>
          <Card>
            <ProjectionsChart />
          </Card>
        </div>
      </div>

      {/* Data Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <DataTable 
              columns={columns}
              data={topSellingProducts}
              title="Top Selling Products"
            />
          </Card>
        </div>
        <div>
          <Card>
            <SalesDonutChart />
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <Card>
        <WorldMapChart />
      </Card>
    </div>
  );
};

export default Dashboard;
