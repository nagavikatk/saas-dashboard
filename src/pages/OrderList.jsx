import { useState, useEffect, useMemo, useRef } from 'react';
import { ChevronDown, Calendar, Search, Sliders, Menu, Plus, Filter, MoreHorizontal } from 'lucide-react';
import Card from '../components/common/Card';
import { orderListData } from '../data/mockData';
import { BiSort } from 'react-icons/bi';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'descending' });
  const [isFilterPopoverOpen, setIsFilterPopoverOpen] = useState(false);
  const [selectedStatusFilters, setSelectedStatusFilters] = useState([]);
  const filterPopoverRef = useRef(null);

  const [isSortPopoverOpen, setIsSortPopoverOpen] = useState(false);
  const sortPopoverRef = useRef(null);

  const itemsPerPage = 8;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterPopoverRef.current && !filterPopoverRef.current.contains(event.target)) {
        setIsFilterPopoverOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filterPopoverRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortPopoverRef.current && !sortPopoverRef.current.contains(event.target)) {
        setIsSortPopoverOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sortPopoverRef]);

  const filteredAndSortedOrders = useMemo(() => {
    let filteredData = orderListData.filter(order =>
      Object.values(order).some(val =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    if (selectedStatusFilters.length > 0) {
      filteredData = filteredData.filter(order =>
        selectedStatusFilters.includes(order.status)
      );
    }

    const sortedData = [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    return sortedData;
  }, [searchTerm, sortConfig, selectedStatusFilters]);

  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);

  useEffect(() => {
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

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleStatusFilterChange = (status) => {
    setSelectedStatusFilters(prev =>
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
    setCurrentPage(1);
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case 'In Progress':
        return 'text-status-blue';
      case 'Complete':
        return 'text-status-green';
      case 'Pending':
        return 'text-status-yellow';
      case 'Approved':
        return 'text-purple';
      case 'Rejected':
        return 'text-status-red';
      default:
        return 'text-status-gray';
    }
  };

  const getStatusDotColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-status-blue';
      case 'Complete':
        return 'bg-status-green';
      case 'Pending':
        return 'bg-status-yellow';
      case 'Approved':
        return 'bg-purple';
      case 'Rejected':
        return 'bg-status-red';
      default:
        return 'bg-status-gray';
    }
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }

    return (
      <div className="flex items-center space-x-1 text-sm">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-border dark:hover:bg-dark-border disabled:opacity-50 transition-colors"
        >
          <ChevronDown className="h-4 w-4 transform rotate-90" />
        </button>
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && handlePageChange(page)}
            className={`w-8 h-8 rounded-lg font-medium transition-colors ${currentPage === page
                ? 'bg-light-border dark:bg-dark-border text-light-text-primary dark:text-dark-text-primary'
                : 'text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-border dark:hover:bg-dark-border'
              }`}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-border dark:hover:bg-dark-border disabled:opacity-50 transition-colors"
        >
          <ChevronDown className="h-4 w-4 transform -rotate-90" />
        </button>
      </div>
    );
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return (
      <ChevronDown
        size={16}
        className={`ml-1 transition-transform ${sortConfig.direction === 'ascending' ? 'rotate-180' : 'rotate-0'
          }`}
      />
    );
  };

  return (
    <Card className="overflow-hidden p-0">
      <div className="pb-4 font-inter">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">Order List</h2>
        </div>

        <div className="flex items-center justify-between bg-primary-light dark:bg-dark-border rounded-lg px-3 py-1">
          <div className="flex items-center space-x-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            <button className="p-2 rounded-lg hover:bg-light-border hover:dark:bg-dark-border text-light-text-primary dark:text-dark-text-primary transition-colors">
              <Plus className="h-4 w-4" />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsFilterPopoverOpen(!isFilterPopoverOpen)}
                className="p-2 rounded-lg hover:bg-light-border hover:dark:bg-dark-border text-light-text-primary dark:text-dark-text-primary transition-colors"
              >
                <Filter className="h-4 w-4" />
              </button>
              {isFilterPopoverOpen && (
                <div className="absolute top-12 left-0 w-48 bg-light-surface dark:bg-dark-surface rounded-lg shadow-xl z-10 p-4 border border-light-border dark:border-dark-border">
                  <h4 className="font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary">Filter by Status</h4>
                  {['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'].map(status => (
                    <div key={status} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={`filter-${status}`}
                        checked={selectedStatusFilters.includes(status)}
                        onChange={() => handleStatusFilterChange(status)}
                        className="h-4 w-4 rounded border-light-border dark:border-dark-border text-accent-blue focus:ring-accent-blue"
                      />
                      <label htmlFor={`filter-${status}`} className="ml-2 text-sm text-light-text-primary dark:text-dark-text-primary">
                        {status}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
<div className="relative" ref={sortPopoverRef}>
  <button
    onClick={() => setIsSortPopoverOpen(!isSortPopoverOpen)}
    className="p-2 rounded-lg hover:bg-light-border hover:dark:bg-dark-border text-light-text-primary dark:text-dark-text-primary transition-colors"
  >
    <BiSort className="h-4 w-4" />
  </button>
  {isSortPopoverOpen && (
    <div className="absolute top-12 left-0 w-54 bg-light-surface dark:bg-dark-surface rounded-lg shadow-xl z-10 p-4 border border-light-border dark:border-dark-border">
      <h4 className="font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary">Sort by</h4>
      <div className="mb-4">
        <label htmlFor="sort-column" className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">Column</label>
        <select
          id="sort-column"
          className="w-full p-2 border border-light-border dark:border-dark-border rounded-lg bg-light-surface dark:bg-dark-surface text-light-text-primary dark:text-dark-text-primary appearance-none focus:outline-none focus:ring-1 focus:ring-accent-blue"
          value={sortConfig.key}
          onChange={(e) => setSortConfig(prev => ({ ...prev, key: e.target.value }))}
        >
          <option value="id">Order ID</option>
          <option value="user">User</option>
          <option value="project">Project</option>
          <option value="address">Address</option>
          <option value="date">Date</option>
          <option value="status">Status</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Order</label>
        <div className="flex space-x-2">
          <button
            onClick={() => setSortConfig(prev => ({ ...prev, direction: 'ascending' }))}
            className={`flex-1 p-2 rounded-lg text-sm font-medium ${sortConfig.direction === 'ascending'
                ? 'bg-accent-blue text-white'
                : 'bg-light-border dark:bg-dark-border text-light-text-primary dark:text-dark-text-primary hover:bg-light-border dark:hover:bg-dark-border'
              }`}
          >
            Ascending
          </button>
          <button
            onClick={() => setSortConfig(prev => ({ ...prev, direction: 'descending' }))}
            className={`flex-1 p-2 rounded-lg text-sm font-medium ${sortConfig.direction === 'descending'
                ? 'bg-accent-blue text-white'
                : 'bg-light-border dark:bg-dark-border text-light-text-primary dark:text-dark-text-primary hover:bg-light-border dark:hover:bg-dark-border'
              }`}
          >
            Descending
          </button>
        </div>
      </div>
    </div>
  )}
</div>
          </div>

          <div className="relative w-full sm:w-48">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-light-text-secondary dark:text-dark-text-secondary" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-light-border dark:border-dark-border rounded-lg bg-light-surface dark:bg-dark-surface text-light-text-primary dark:text-dark-text-primary placeholder:text-light-text-secondary focus:outline-none focus:ring-1 focus:ring-accent-blue"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-light-border dark:divide-dark-border">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase text-light-text-secondary dark:text-dark-text-secondary tracking-wider">
              <th scope="col" className="w-16 px-6 py-3">
                <input type="checkbox" className="h-4 w-4 rounded border-light-border dark:border-dark-border text-accent-blue focus:ring-accent-blue" />
              </th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('id')}>Order ID {getSortIcon('id')}</th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('user')}>User {getSortIcon('user')}</th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('project')}>Project {getSortIcon('project')}</th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('address')}>Address {getSortIcon('address')}</th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('date')}>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Date {getSortIcon('date')}
                </div>
              </th>
              <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => handleSort('status')}>Status {getSortIcon('status')}</th>
              <th scope="col" className="px-4 py-3 text-right">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-light-surface dark:bg-dark-surface divide-y divide-light-border dark:divide-dark-border">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="hover:bg-light-border/50 dark:hover:bg-dark-border/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      onChange={() => { }}
                      className="h-4 w-4 rounded border-light-border dark:border-dark-border text-accent-blue focus:ring-accent-blue"
                    />
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-light-text-primary dark:text-dark-text-primary">
                    {order.id}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-8 w-8 rounded-full mr-3" src="https://i.pravatar.cc/40" alt={order.user} />
                      <span className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">{order.user}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {order.project}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {order.address}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {order.date}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${getStatusDotColor(order.status)}`}></span>
                      <span className={getStatusClasses(order.status)}>{order.status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">
                    <button className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-8 text-light-text-secondary dark:text-dark-text-secondary">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-light-border dark:border-dark-border">
        <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
          Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredAndSortedOrders.length)}</span> of <span className="font-medium">{filteredAndSortedOrders.length}</span> results
        </div>
        {renderPagination()}
      </div>
    </Card>
  );
};

export default OrderList;