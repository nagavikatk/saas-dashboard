import React from 'react';

const SearchResults = ({ results, loading }) => {
  if (loading) {
    return (
      <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
        <div className="p-4 text-gray-500 dark:text-gray-400">Searching...</div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
        <div className="p-4 text-gray-500 dark:text-gray-400">No results found.</div>
      </div>
    );
  }

  return (
    <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {results.map((result) => (
          <li key={result.id} className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <p className="font-semibold text-gray-900 dark:text-white">{result.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{result.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
