import Card from './Card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatsCard = ({ title, value, prefix = '', suffix = '', change, isPositive, bgClass }) => {
  return (
    <Card className={`${bgClass}`}>
      <p className="text-sm text-gray">{title}</p>
      <div className="flex items-end justify-between mt-2">
        <p className="text-3xl font-bold text-dark">
          {prefix}{value}{suffix}
        </p>
        <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-success' : 'text-gray'}`}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          <span>{change}</span>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
