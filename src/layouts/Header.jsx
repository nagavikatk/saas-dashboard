import React, { useState, useEffect, useCallback, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import {
  PanelLeft,
  Star,
  Search,
  Command,
  Sun,
  Moon,
  Bell,
  PanelRight,
  RefreshCw
} from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SearchResults from '../components/common/SearchResults';
import { topSellingProducts } from '../data/mockData';
import { useDebounce } from '../hooks/useDebounce';
import Notifications from '../components/common/Notifications'; // Import Notifications component for popover

/**
 * A modern, responsive header component for a SaaS dashboard.
 * It includes breadcrumbs, a search bar, and action icons, styled with Tailwind CSS.
 */
const Header = ({ toggleSidebar, isSidebarCollapsed, toggleRightPanel }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isNotificationPopoverOpen, setIsNotificationPopoverOpen] = useState(false); // New state for notification popover

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const handleSearch = useCallback((query) => {
    if (query.length > 0) {
      setIsSearching(true);
      const filteredProducts = topSellingProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
      setIsSearching(false);
    } else {
      setSearchResults([]);
    }
  }, []);

  useEffect(() => {
    handleSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, handleSearch]);

  const toggleNotificationPopover = () => setIsNotificationPopoverOpen(!isNotificationPopoverOpen); // New toggle function

  return (
    <header className="bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border w-full">
      <div className="flex items-center justify-between p-4 h-16">
        {/* Left Section: Breadcrumbs and Favorites */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-light-text-secondary hover:text-gray-700 dark:text-dark-text-secondary dark:hover:text-gray-200 transition-colors"
          >
            <PanelLeft size={20} />
          </button>
          <button className="text-light-text-secondary hover:text-yellow-500 dark:text-dark-text-secondary dark:hover:text-yellow-400 transition-colors">
            <Star size={20} />
          </button>
          <Breadcrumbs />
        </div>

        {/* Right Section: Search and Action Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pl-10 pr-10 py-2 text-sm bg-slate-100 dark:bg-slate-800 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 border border-gray-300 dark:border-gray-600 rounded-md p-0.5">
                <Command size={12} />
            </div>
            {isSearchFocused && (searchQuery.length > 0 || isSearching) && (
              <SearchResults results={searchResults} loading={isSearching} />
            )}
          </div>

          {/* Action Icons */}
          <button
            onClick={toggleTheme}
            className="text-light-text-secondary hover:text-gray-700 dark:text-dark-text-secondary dark:hover:text-gray-200 transition-colors"
          >
            {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-light-text-secondary hover:text-gray-700 dark:text-dark-text-secondary dark:hover:text-gray-200 transition-colors">
            <RefreshCw size={20} />
          </button>
          <div className="relative"> {/* Wrap button and popover in a relative div */}
            <button
              onClick={toggleNotificationPopover} // Add onClick handler
              className="text-light-text-secondary hover:text-gray-700 dark:text-dark-text-secondary dark:hover:text-gray-200 transition-colors"
            >
              <Bell size={20} />
              {/* Notification dot */}
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900"></span>
            </button>
            {isNotificationPopoverOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg shadow-lg overflow-hidden z-20">
                <Notifications isOpen={isNotificationPopoverOpen} onClose={toggleNotificationPopover} className="p-4" /> {/* Render Notifications component */}
              </div>
            )}
          </div>
          <button
            onClick={toggleRightPanel} // Add onClick handler
            className="text-light-text-secondary hover:text-gray-700 dark:text-dark-text-secondary dark:hover:text-gray-200 transition-colors"
          >
            <PanelRight size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;