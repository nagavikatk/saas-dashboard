
import { useState, useEffect } from 'react';
import Card from '../components/common/Card';
import Pagination from '../components/common/Pagination';
import DataTable from '../components/common/DataTable';
import { orderListData } from '../data/mockData';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'descending' });

  const itemsPerPage = 5;
  const totalItems = orderListData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    let filteredData = orderListData.filter(order =>
      Object.values(order).some(val => 
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    const paginatedData = sortedData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    setOrders(paginatedData);
  }, [currentPage, searchTerm, sortConfig]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'user', label: 'User' },
    { key: 'project', label: 'Project' },
    { key: 'status', label: 'Status' },
    { key: 'date', label: 'Date' },
  ];

  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">Orders</h2>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-light-border dark:border-dark-border rounded-lg bg-light-surface dark:bg-dark-surface text-light-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>
      </div>
      <DataTable 
        columns={columns}
        data={orders}
        onSort={handleSort}
        sortConfig={sortConfig}
      />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Card>
  );
};

export default OrderList;
