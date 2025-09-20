import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FiSun, FiMoon, FiSearch, FiBell } from 'react-icons/fi';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex items-center justify-between p-4 border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
        <FiSearch className="text-light-text-secondary dark:text-dark-text-secondary" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 bg-transparent focus:outline-none text-sm text-light-text-primary dark:text-dark-text-primary"
        />
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="p-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-border">
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <button className="p-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-border">
          <FiBell />
        </button>
        {/* Profile */}
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full"
            src="https://i.pravatar.cc/40"
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;