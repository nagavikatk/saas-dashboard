const StatusPill = ({ status }) => {
  const baseStyle = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xxs font-semibold leading-4";
  const statusMap = {
    'Complete': `${baseStyle} bg-status-green-bg text-status-green`,
    'In Progress': `${baseStyle} bg-status-blue-bg text-status-blue`,
    'Pending': `${baseStyle} bg-status-yellow-bg text-status-yellow`,
    'Approved': `${baseStyle} bg-status-green-bg text-status-green`,
    'Rejected': `${baseStyle} bg-status-red-bg text-status-red`,
  };
  
  return (
    <span className={statusMap[status] || `${baseStyle} bg-status-gray-bg text-status-gray`}>
      <span className="w-1.5 h-1.5 mr-1.5 rounded-full" style={{ backgroundColor: 'currentColor' }}></span>
      {status}
    </span>
  );
};
export default StatusPill;