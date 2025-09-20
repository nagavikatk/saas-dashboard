import StatCard from '../components/dashboard/StatCard';
import Card from '../components/common/Card';
import DataTable from '../components/common/DataTable';
import { topSellingProducts } from '../data/mockData';

const Dashboard = () => {

  const productColumns = [
    { key: 'name', label: 'Product' },
    { key: 'price', label: 'Price' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'amount', label: 'Amount' },
  ];

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Stat Cards */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3">
        <StatCard title="Customers" value="3,781" change="+11.01%" isPositive={true} />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3">
        <StatCard title="Orders" value="1,219" change="-0.03%" isPositive={false} />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3">
        <StatCard title="Revenue" value="$695" change="+15.03%" isPositive={true} />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3">
        <StatCard title="Growth" value="30.1%" change="+6.08%" isPositive={true} />
      </div>

      {/* Charts */}
      <div className="col-span-12 lg:col-span-6">
        <Card>
          <div className="p-6">
            <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary">Projections vs Actuals</h3>
          </div>
          <div className="p-6 h-80 flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary">
            {/* Recharts component would go here */}
            <span>Chart Placeholder</span>
          </div>
        </Card>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <Card>
          <div className="p-6">
            <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary">Revenue Chart</h3>
          </div>
          <div className="p-6 h-80 flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary">
            {/* Recharts component would go here */}
            <span>Chart Placeholder</span>
          </div>
        </Card>
      </div>
      
      {/* Bottom Row */}
      <div className="col-span-12">
        <Card className="overflow-hidden">
          <div className="p-6">
            <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary">Top Selling Products</h3>
          </div>
          <DataTable 
            columns={productColumns}
            data={topSellingProducts}
            onSort={() => {}} // Sorting not implemented for this table
          />
        </Card>
      </div>
    </div>
  );
};
export default Dashboard;
