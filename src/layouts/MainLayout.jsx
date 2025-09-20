import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-page-light dark:bg-page-dark">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default MainLayout;