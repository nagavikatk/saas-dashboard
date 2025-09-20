import { motion } from 'framer-motion';

const Card = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl shadow-sm ${className}`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
};
export default Card;