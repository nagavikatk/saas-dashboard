import Card from './Card';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const StatsCard = ({ title, value, prefix = '', suffix = '', change }) => {
  const isPositive = change.startsWith('+');

  return (
    <Card className="p-6">
      <h3 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">{title}</h3>
      <p className="mt-2 text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
        {prefix}{value}{suffix}
      </p>
      <p className={`mt-2 text-sm ${isPositive ? 'text-status-green' : 'text-status-red'}`}>
        {isPositive ? <FiArrowUp className="inline-block" /> : <FiArrowDown className="inline-block" />} {change.substring(1)}
      </p>
    </Card>
  );
};

export default StatsCard;
