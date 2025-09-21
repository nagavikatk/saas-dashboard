import React from 'react';
import { X } from 'lucide-react';
import Notifications from '../components/common/Notifications'; // Re-using the Notifications component

const RightSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-white dark:bg-dark-surface shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Panel</h2>
        <button onClick={onClose} className="text-gray-500 dark:text-gray-400 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
          <X size={20} />
        </button>
      </div> */}

      <div className="p-4 overflow-y-auto h-full">
        {/* Notifications Section */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3 text-gray-800 dark:text-gray-100">Notifications</h3>
          <Notifications className="border-0" /> {/* Re-using the Notifications component */}
        </div>

        {/* Activities Section */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3 text-gray-800 dark:text-gray-100">Activities</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">You have a bug that needs...</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Just now</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Released a new version</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">59 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Submitted a bug</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">12 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Modified A data in Page X</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Today, 11:59 AM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Deleted a page in Project X</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Feb 2, 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-gray-800 dark:text-gray-100">Contacts</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="Natali Craig" className="w-8 h-8 rounded-full" />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Natali Craig</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="Drew Cano" className="w-8 h-8 rounded-full" />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Drew Cano</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="Orlando Diggs" className="w-8 h-8 rounded-full" />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Orlando Diggs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;