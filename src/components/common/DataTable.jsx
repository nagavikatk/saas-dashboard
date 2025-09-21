const DataTable = ({ columns, data, title }) => {
  return (
    <div className="overflow-hidden">
      {title && (
        <div>
          <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary">
            {title}
          </h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b-2 border-light-border dark:border-dark-border">
            <tr className="text-left text-sm text-light-text-primary dark:text-dark-text-primary">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="font-medium py-3"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`py-3 ${column.key === 'name' ? 'text-light-text-primary dark:text-dark-text-primary font-semibold' : 'text-light-text-primary dark:text-dark-text-primary'}`}
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
