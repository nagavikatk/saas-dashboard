import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        <li>
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-200">Dashboard</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-700 dark:text-gray-200">{value.charAt(0).toUpperCase() + value.slice(1)}</span>
              ) : (
                <Link to={to} className="hover:text-gray-700 dark:hover:text-gray-200">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
