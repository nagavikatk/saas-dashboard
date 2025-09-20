import { NavLink } from 'react-router-dom';
import { FiHome, FiGrid } from 'react-icons/fi';

const Sidebar = () => {
  const linkStyle = "flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:bg-accent-blue-light dark:hover:bg-dark-accent-blue-light hover:text-accent-blue dark:hover:text-accent-blue transition-colors duration-200";
  const activeLinkStyle = "bg-accent-blue-light dark:bg-dark-accent-blue-light text-accent-blue dark:text-accent-blue font-semibold";

  return (
    <aside className="w-64 flex-shrink-0 border-r border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 hidden lg:block">
      <h1 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8">ByeWind</h1>
      <nav className="flex flex-col gap-y-4">
        <div>
          <h2 className="text-xs font-semibold text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider mb-2">Favorites</h2>
          <NavLink to="/" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>
            <FiHome />
            Overview
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>
            <FiGrid />
            Projects
          </NavLink>
        </div>
        <div>
          <h2 className="text-xs font-semibold text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider mb-2">Dashboards</h2>
          <NavLink to="/ecommerce/orders" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>
            eCommerce
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;