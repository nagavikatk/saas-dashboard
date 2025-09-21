import React from 'react';
import { X } from 'lucide-react';
import Notifications from '../components/common/Notifications'; // Re-using the Notifications component

const RightSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-white dark:bg-dark-surface shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ zIndex: 1000 }} // Ensure it's above other content
    >
      <div className="flex items-center justify-between p-4 border-b border-light-border dark:border-dark-border">
        <h2 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">Panel</h2>
        <button onClick={onClose} className="text-light-text-secondary dark:text-dark-text-secondary">
          <X size={20} />
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-65px)]"> {/* Adjust height based on header */}
        {/* Notifications Section */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3 text-light-text-primary dark:text-dark-text-primary">Notifications</h3>
          <Notifications /> {/* Re-using the Notifications component */}
        </div>

        {/* Activities Section */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3 text-light-text-primary dark:text-dark-text-primary">Activities</h3>
          <div className="space-y-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            <p>User 'John Doe' logged in. (5 mins ago)</p>
            <p>Report 'Sales Q3' generated. (1 hour ago)</p>
            <p>New order #1234 received. (2 hours ago)</p>
            <p>System update completed. (Yesterday)</p>
          </div>
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-light-text-primary dark:text-dark-text-primary">Contacts</h3>
          <div className="space-y-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-800">JD</div>
              <span>John Doe</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-green-800">JS</div>
              <span>Jane Smith</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-800">AM</div>
              <span>Alice Miller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
