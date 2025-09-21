import { NavLink } from 'react-router-dom';
import { 
  FiHome, 
  FiGrid, 
  FiLayout, 
  FiShoppingCart, 
  FiBriefcase, 
  FiBookOpen, 
  FiUser, 
  FiFileText,
  FiUsers,
  FiSettings,
  FiGlobe,
  FiPenTool,
  FiLink
} from 'react-icons/fi';

// Data structure for navigation links to keep the JSX clean and maintainable.
const navSections = [
  {
    title: 'Favorites',
    links: [
      { name: 'Overview', path: '/', icon: FiHome },
      { name: 'Projects', path: '/projects', icon: FiGrid }
    ]
  },
  {
    title: 'Dashboards',
    links: [
      { name: 'Default', path: '/dashboards/default', icon: FiLayout },
      { name: 'eCommerce', path: '/ecommerce/orders', icon: FiShoppingCart },
      { name: 'Projects', path: '/dashboards/projects', icon: FiBriefcase },
      { name: 'Online Courses', path: '/dashboards/courses', icon: FiBookOpen }
    ]
  },
  {
    title: 'Pages',
    links: [
      { name: 'User Profile', path: '/pages/profile', icon: FiUser },
      { name: 'Overview', path: '/pages/overview', icon: FiFileText },
      { name: 'Projects', path: '/pages/projects', icon: FiBriefcase },
      { name: 'Campaigns', path: '/pages/campaigns', icon: FiGlobe },
      { name: 'Documents', path: '/pages/documents', icon: FiFileText },
      { name: 'Followers', path: '/pages/followers', icon: FiUsers },
      { name: 'Account', path: '/pages/account', icon: FiSettings },
    ]
  }
];

const linkStyle = "flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:bg-accent-blue-light dark:hover:bg-dark-border";
const activeLinkStyle = "bg-[#e1f3fe] text-[#3B82F6] font-semibold";

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside className={`w-64 flex-shrink-0 border-r border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 flex-col ${isCollapsed ? 'hidden' : 'lg:flex'}`}>
      <div className="flex items-center gap-3 mb-8">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-light-text-primary dark:text-dark-text-primary text-sm">ByeWind</p>
          </div>
        </div>
      <nav className="flex-1 flex flex-col gap-y-6">
        {navSections.map((section) => (
          <div key={section.title}>
            <h2 className="px-3 text-xs font-semibold text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider mb-2">
              {section.title}
            </h2>
            <div className="flex flex-col gap-y-1">
              {section.links.map((link) => (
                <NavLink
                  key={link.name + section.title}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle
                  }
                  end={link.path === '/'}
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
