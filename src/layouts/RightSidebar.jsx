import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Notifications from '../components/common/Notifications';

const RightSidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 w-80 bg-light-surface dark:bg-dark-surface shadow-lg transform transition-transform duration-300 ease-in-out z-50 font-inter
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex items-center justify-end">
        {/* <h2 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">Panel</h2> */}
        <button onClick={onClose} className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-full hover:bg-light-border dark:hover:bg-dark-border transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100vh-65px)]">
        {/* Notifications Section */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3 text-light-text-primary dark:text-dark-text-primary">Notifications</h3>
          <Notifications isOpen={true} onClose={() => {}} /> {/* Notifications inside RightSidebar should not be interactive here */}
        </div>

        {/* Activities Section */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3 text-light-text-primary dark:text-dark-text-primary">Activities</h3>
          <div className="space-y-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            {/* Hardcoded Activities Data based on design */}
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">You have a bug that needs...</p>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Just now</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">Released a new version</p>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">59 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">Submitted a bug</p>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">12 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-light-text-primary dark:text-dark-text-primary">Contacts</h3>
          <div className="space-y-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            {/* Hardcoded Contacts Data based on design */}
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="Natali Craig" className="w-8 h-8 rounded-full" />
              <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">Natali Craig</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://i.pravatar.cc/40" alt="Drew Cano" className="w-8 h-8 rounded-full" />
              <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">Drew Cano</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;