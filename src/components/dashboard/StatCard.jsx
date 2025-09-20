import Card from '../common/Card';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const StatCard = ({ title, value, change, isPositive }) => {
  const changeColor = isPositive ? 'text-status-green' : 'text-status-red';
  const Icon = isPositive ? FiArrowUp : FiArrowDown;

  return (
    <Card className="p-6">
      <h3 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">{title}</h3>
      <div className="mt-2 flex items-baseline gap-x-2">
        <p className="text-3xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary">{value}</p>
        <span className={`flex items-center text-sm font-semibold ${changeColor}`}>
          <Icon className="h-4 w-4" />
          {change}
        </span>
      </div>
    </Card>
  );
};
export default StatCard;