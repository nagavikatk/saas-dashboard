import StatusPill from './StatusPill';

const DataTable = ({ columns, data, onSort, sortConfig }) => {
  const renderCell = (item, column) => {
    if (column.key === 'status') {
      return <StatusPill status={item[column.key]} />;
    }
    return item[column.key];
  };

  return (
    <table className="w-full">
      <thead className="bg-page-light dark:bg-page-dark">
        <tr>
          {columns.map((col) => (
            <th 
              key={col.key} 
              className="p-6 text-left text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider cursor-pointer"
              onClick={() => onSort(col.key)}
            >
              {col.label}
              {sortConfig && sortConfig.key === col.key && (
                <span>{sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-light-border dark:divide-dark-border">
        {data.map((item) => (
          <tr key={item.id} className="hover:bg-page-light dark:hover:bg-page-dark">
            {columns.map((col) => (
              <td key={`${item.id}-${col.key}`} className="p-6 whitespace-nowrap text-sm text-light-text-secondary dark:text-dark-text-secondary">
                {renderCell(item, col)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
