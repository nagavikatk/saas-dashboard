import { motion } from 'framer-motion';

const StatsCard = ({ title, value, prefix = '', suffix = '', change }) => {
  const isPositive = parseFloat(change) >= 0;

  return (
    <motion.div 
      className="p-6 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <h3 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">{title}</h3>
      <p className="mt-2 text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
        {prefix}{value}{suffix}
      </p>
      <p className={`mt-2 text-sm ${isPositive ? 'text-status-green' : 'text-status-red'}`}>
        {isPositive ? '↑' : '↓'} {Math.abs(change)}%
      </p>
    </motion.div>
  );
};

export default StatsCard;
