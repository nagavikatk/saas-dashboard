import React, { useContext } from 'react';
import { Search, Bell, Menu, HelpCircle, Settings, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';
import Notifications from '../components/common/Notifications';

// You'll need to pass 'setSidebarOpen' as a prop from your main layout component
const Header = ({ setSidebarOpen, isNotificationsOpen, toggleNotifications }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white border-b border-border p-4 flex items-center justify-between relative">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen(prev => !prev)} className="text-gray p-1 rounded-md hover:bg-light">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold text-dark">Default</h1>
      </div>

      {/* Middle: Search Bar */}
      <div className="relative w-full max-w-xs">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="text-gray" size={20} />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-light-bg border border-border rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="text-gray p-2 rounded-full hover:bg-light">
          <HelpCircle size={22} />
        </button>
        <button className="text-gray p-2 rounded-full hover:bg-light">
          <Settings size={22} />
        </button>
        <button 
          className="text-gray p-2 rounded-full hover:bg-light relative"
          onClick={toggleNotifications}
        >
          <Bell size={22} />
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        {/* Theme Toggle Button */}
        <button className="text-gray p-2 rounded-full hover:bg-light" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
        </button>
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40" // Replace with actual user avatar URL
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-dark text-sm">Andi Lane</p>
          </div>
        </div>
      </div>
      <Notifications isOpen={isNotificationsOpen} onClose={toggleNotifications} />
    </header>
  );
};

export default Header;
