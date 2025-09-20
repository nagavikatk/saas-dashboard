import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex items-center justify-between p-6 border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
      <div>
        <h1 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">Dashboard</h1>
      </div>
      <div>
        <button onClick={toggleTheme} className="p-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-border">
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;