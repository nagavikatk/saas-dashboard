import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Notifications from '../components/common/Notifications';
import RightSidebar from './RightSidebar'; // Import the new RightSidebar component

const MainLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false); // New state for right panel

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);
  const toggleRightPanel = () => setIsRightPanelOpen(!isRightPanelOpen); // New toggle function

  return (
    <>
      <div className="flex h-screen bg-light-surface dark:bg-page-dark">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <div
          className={`flex-1 flex flex-col transition-all duration-300 ${isRightPanelOpen ? 'mr-80' : ''}`}
        >
          <Header
            toggleSidebar={toggleSidebar}
            isSidebarCollapsed={isSidebarCollapsed}
            isNotificationsOpen={isNotificationsOpen}
            toggleNotifications={toggleNotifications}
            toggleRightPanel={toggleRightPanel} // Pass new toggle function
          />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
        {isNotificationsOpen && (
          <Notifications isOpen={isNotificationsOpen} onClose={toggleNotifications} />
        )}
        <RightSidebar isOpen={isRightPanelOpen} onClose={toggleRightPanel} /> {/* Render RightSidebar */}
      </div>
     </>
  );
};

export default MainLayout;