import Card from './Card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatsCard = ({ title, value, prefix = '', suffix = '', change, isPositive, bgClass = '', textClass='text-light-text-primary dark:text-dark-text-primary' }) => {
  return (
    <Card className={`${bgClass} p-6 flex flex-col justify-center h-full`}>
      <p className={`text-base font-medium ${textClass}`}>{title}</p>
      <div className="flex items-end justify-between mt-2 flex-wrap">
        <p className={`text-lg lg:text-3xl font-bold min-w-0 ${textClass}`}>
          {prefix}{value}{suffix}
        </p>
        <div className={`flex items-center gap-1 text-xs lg:text-sm font-semibold min-w-0 ${isPositive ? 'text-status-green' : `${textClass}`}`}>
          {isPositive ? <ArrowUpRight data-testid="arrow-up-right" size={12} /> : <ArrowDownRight data-testid="arrow-down-right" size={12} />}
          <span>{change}</span>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
