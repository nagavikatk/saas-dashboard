const DataTable = ({ columns, data, title }) => {
  return (
    <div className="overflow-hidden">
      {title && (
        <div className="p-6 border-b border-light-border dark:border-dark-border">
          <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary">
            {title}
          </h3>
        </div>
      )}
      <div className="p-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              {columns.map(column => (
                <th 
                  key={column.key} 
                  className="text-left p-2 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr 
                key={index}
                className="border-b border-light-border dark:border-dark-border last:border-0"
              >
                {columns.map(column => (
                  <td 
                    key={column.key} 
                    className="p-2 text-sm text-light-text-primary dark:text-dark-text-primary"
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
