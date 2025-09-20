const DataTable = ({ columns, data, title }) => {
  return (
    <div className="overflow-hidden">
      {title && (
        <div className="p-6">
          <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary">
            {title}
          </h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-light-border dark:divide-dark-border">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-light-surface dark:bg-dark-surface divide-y divide-light-border dark:divide-dark-border">
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 whitespace-nowrap text-sm text-light-text-primary dark:text-dark-text-primary"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
