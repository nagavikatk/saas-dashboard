const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const baseButton = "flex items-center justify-center h-9 w-9 rounded-lg text-sm font-medium transition-colors";
  const pageButton = `${baseButton} text-light-text-secondary dark:text-dark-text-secondary hover:bg-accent-blue-light hover:text-accent-blue dark:hover:bg-dark-accent-blue-light dark:hover:text-accent-blue`;
  const activeButton = `${baseButton} bg-accent-blue text-white shadow-md`;
  const arrowButton = `${baseButton} text-light-text-secondary dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-border`;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-end gap-x-2 p-6 border-t border-light-border dark:border-dark-border">
      <button onClick={handlePrevious} className={arrowButton} disabled={currentPage === 1}>&lt;&lt;</button>
      {pageNumbers.map(number => (
        <button 
          key={number} 
          onClick={() => onPageChange(number)} 
          className={currentPage === number ? activeButton : pageButton}
        >
          {number}
        </button>
      ))}
      <button onClick={handleNext} className={arrowButton} disabled={currentPage === totalPages}>&gt;&gt;</button>
    </div>
  );
};
export default Pagination;
