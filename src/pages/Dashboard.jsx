import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import StatsCard from '../components/common/StatsCard';
import ProjectionsChart from '../components/charts/ProjectionsChart';
import RevenueChart from '../components/charts/RevenueChart';
import WorldMapChart from '../components/charts/WorldMapChart';
import DataTable from '../components/common/DataTable';
import SalesDonutChart from '../components/charts/SalesDonutChart';
import Card from '../components/common/Card';
import { topSellingProducts } from '../data/mockData';

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  const getBgClass = (lightClass, darkClass) => {
    return theme === 'dark' ? darkClass : lightClass;
  };

  const statsData = [
    { title: 'Customers', value: '3,781', change: '+11.01%', isPositive: true, bgClass: getBgClass('bg-primary-blue', 'bg-primary-blue'), textClass: 'text-dark' },
    { title: 'Orders', value: '1,219', change: '-0.03%', isPositive: false, bgClass: getBgClass('bg-primary-light', 'bg-dark-primary-light'), textClass: getBgClass('text-light-text-primary','dark:text-dark-text-primary') },
    { title: 'Revenue', value: '$695', change: '+15.03%', isPositive: true, bgClass: getBgClass('bg-primary-light', 'bg-dark-primary-light') , textClass: getBgClass('text-light-text-primary','dark:text-dark-text-primary')},
    { title: 'Growth', value: '30.1%', change: '+14.98%', isPositive: true, bgClass: getBgClass('bg-primary-purple', 'bg-primary-purple'), textClass: 'text-dark' }
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'price', label: 'Price' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'amount', label: 'Amount' }
  ];

  return (
    <main className="flex-1 p-6 bg-light-surface dark:bg-dark-surface gap-10">
      <div className="flex flex-col lg:flex-row gap-10 mb-10">
        <div className="w-full lg:flex-1 flex" >
          <div className="grid grid-cols-2 gap-10 flex-grow">
            {statsData.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
        <div className="w-full lg:flex-1">
          <Card className='bg-primary-light dark:bg-dark-primary-light'>
            <ProjectionsChart />
          </Card>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mb-10">
        <div className="w-full lg:flex-[3]">
          <Card className='bg-primary-light dark:bg-dark-primary-light'>
            <RevenueChart />
          </Card>
        </div>
        <div className="w-full lg:flex-[1] flex">
          <Card className='bg-primary-light flex-grow dark:bg-dark-primary-light'>
            <WorldMapChart />
          </Card>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:flex-[3]">
          <Card className='bg-primary-light dark:bg-dark-primary-light'>
            <DataTable 
              columns={columns}
              data={topSellingProducts.splice(0, 6)}
              title="Top Selling Products"
            />
          </Card>
        </div>
        <div className="w-full lg:flex-[1] flex">
          <Card className='bg-primary-light flex-grow dark:bg-dark-primary-light'>
            <SalesDonutChart />
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
