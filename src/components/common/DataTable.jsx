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
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="font-medium py-3 px-4"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`py-3 px-4 ${column.key === 'name' ? 'text-dark font-semibold' : 'text-gray'}`}
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
