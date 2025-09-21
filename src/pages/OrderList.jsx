import { useState, useEffect, useMemo } from 'react';
import Card from '../components/common/Card';
import { orderListData } from '../data/mockData';
import { ChevronDown, Calendar, Sliders, Search, Menu, Plus } from 'lucide-react'; // Added icons

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'descending' });
  const [selectedRows, setSelectedRows] = useState([]);

  const itemsPerPage = 5;

  // Memoize the filtered and sorted data to prevent unnecessary re-calculations
  const filteredAndSortedOrders = useMemo(() => {
    // 1. Filtering
    const filteredData = orderListData.filter(order =>
      Object.values(order).some(val =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    // 2. Sorting
    const sortedData = [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === undefined || bValue === undefined) return 0;

      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    return sortedData;
  }, [searchTerm, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);

  useEffect(() => {
    // 3. Pagination
    const paginatedData = filteredAndSortedOrders.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    setOrders(paginatedData);
  }, [currentPage, filteredAndSortedOrders]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const toggleRowSelection = (orderId) => {
    if (selectedRows.includes(orderId)) {
      setSelectedRows(selectedRows.filter(id => id !== orderId));
    } else {
      setSelectedRows([...selectedRows, orderId]);
    }
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'text-blue-500';
      case 'Complete':
        return 'text-green-500';
      case 'Pending':
        return 'text-blue-300';
      case 'Approved':
        return 'text-yellow-500';
      case 'Rejected':
        return 'text-gray-500';
      default:
        return 'text-light-text-primary dark:text-dark-text-primary';
    }
  };

  const getStatusDotColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-500';
      case 'Complete':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-blue-300';
      case 'Approved':
        return 'bg-yellow-500';
      case 'Rejected':
        return 'bg-gray-500';
      default:
        return 'bg-light-text-secondary dark:bg-dark-text-secondary';
    }
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    // Ensure 'startPage' is always 1 when totalPages <= maxVisiblePages
    let startPage = 1;
    let endPage = Math.min(totalPages, maxVisiblePages);

    // If there are more pages, adjust the start and end points
    if (totalPages > maxVisiblePages) {
      if (currentPage > 3) {
        startPage = Math.min(currentPage - 2, totalPages - maxVisiblePages + 1);
        endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
      }
    }

    // Show ellipsis at the beginning if needed
    if (startPage > 1) {
      pageNumbers.push('...');
    }

    // Display the pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Show ellipsis at the end if needed
    if (endPage < totalPages) {
      pageNumbers.push('...');
    }

    return (
      <div className="flex items-center space-x-1 text-sm">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-light-border dark:border-dark-border text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-surface-2 dark:hover:bg-dark-surface-2 disabled:opacity-50 transition-colors"
        >
          <ChevronDown className="h-4 w-4 transform rotate-90" />
        </button>
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && handlePageChange(page)}
            className={`w-8 h-8 rounded-lg font-medium transition-colors ${currentPage === page
                ? 'bg-light-surface dark:bg-dark-surface text-accent-blue border border-accent-blue'
                : 'text-light-text-primary dark:text-dark-text-primary hover:bg-light-surface-2 dark:hover:bg-dark-surface-2'
              }`}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-light-border dark:border-dark-border text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-surface-2 dark:hover:bg-dark-surface-2 disabled:opacity-50 transition-colors"
        >
          <ChevronDown className="h-4 w-4 transform -rotate-90" />
        </button>
      </div>
    );
  };
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 border-b border-light-border dark:border-dark-border">
        {/* Title and Buttons */}
        <div className="flex items-center flex-wrap gap-4 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">Order List</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg bg-light-surface-2 dark:bg-dark-surface-2 text-light-text-primary dark:text-dark-text-primary hover:bg-light-surface-3 dark:hover:bg-dark-surface-3 transition-colors">
              <Plus className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg bg-light-surface-2 dark:bg-dark-surface-2 text-light-text-primary dark:text-dark-text-primary hover:bg-light-surface-3 dark:hover:bg-dark-surface-3 transition-colors">
              <Sliders className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg bg-light-surface-2 dark:bg-dark-surface-2 text-light-text-primary dark:text-dark-text-primary hover:bg-light-surface-3 dark:hover:bg-dark-surface-3 transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-light-text-secondary dark:text-dark-text-secondary" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-48 pl-10 pr-4 py-2 border border-light-border dark:border-dark-border rounded-md bg-light-surface dark:bg-dark-surface text-light-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-1 focus:ring-accent-blue"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-light-border dark:divide-dark-border">
          <thead>
            <tr className="bg-light-surface-2 dark:bg-dark-surface-2 text-left text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium">
              <th scope="col" className="w-16 px-6 py-3">
                <input type="checkbox" className="h-4 w-4 rounded border-light-border dark:border-dark-border text-accent-blue focus:ring-accent-blue bg-light-surface dark:bg-dark-surface" />
              </th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('id')}>Order ID</th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('user')}>User</th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('project')}>Project</th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('address')}>Address</th>
              <th scope="col" className="px-4 py-3 cursor-pointer flex items-center gap-1" onClick={() => handleSort('date')}>
                <span>Date</span>
              </th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('status')}>Status</th>
              <th scope="col" className="px-4 py-3"></th> {/* Action column */}
            </tr>
          </thead>
          <tbody className="divide-y divide-light-border dark:divide-dark-border">
            {orders.map((order, index) => (
              <tr key={index} className="hover:bg-light-surface-2 dark:hover:bg-dark-surface-2 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(order.id)}
                    onChange={() => toggleRowSelection(order.id)}
                    className="h-4 w-4 rounded border-light-border dark:border-dark-border text-accent-blue focus:ring-accent-blue bg-light-surface dark:bg-dark-surface"
                  />
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-light-text-primary dark:text-dark-text-primary font-medium">
                  {order.id}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-8 w-8 rounded-full mr-2" src={order.avatar} alt={order.user} />
                    <span className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">{order.user}</span>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-light-text-primary dark:text-dark-text-primary">
                  {order.project}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-light-text-primary dark:text-dark-text-primary">
                  {order.address}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-light-text-primary dark:text-dark-text-primary">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {order.date}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center">
                    <span className={`h-2 w-2 rounded-full mr-2 ${getStatusDotColor(order.status)}`}></span>
                    <span className={getStatusTextColor(order.status)}>{order.status}</span>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex items-center justify-end px-6 py-4">
        {renderPagination()}
      </div>
    </Card>
  );
};

export default OrderList;