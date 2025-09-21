import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Notifications from '../components/common/Notifications';

const MainLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

  return (
    <>
      <div className="flex h-screen bg-light-gray dark:bg-page-dark">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <div 
          className="flex-1 flex flex-col transition-all duration-300"
        >
          <Header 
            toggleSidebar={toggleSidebar}
            isSidebarCollapsed={isSidebarCollapsed}
            isNotificationsOpen={isNotificationsOpen}
            toggleNotifications={toggleNotifications}
          />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      {/* </div> */}
        {isNotificationsOpen && (
          <Notifications isOpen={isNotificationsOpen} onClose={toggleNotifications} />
        )}
      </div>
     </>
  );
};

export default MainLayout;