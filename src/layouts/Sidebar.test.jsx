import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

// Mock react-router-dom's NavLink
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    NavLink: vi.fn(({ to, className, children, end }) => {
      const realIsActive = window.location.pathname === to || (end && window.location.pathname === '/');
      return (
        <a
          href={to}
          className={typeof className === 'function' ? className({ isActive: realIsActive }) : className}
          data-is-active={realIsActive}
          aria-current={realIsActive ? 'page' : undefined}
        >
          {children}
        </a>
      );
    }),
  };
});

// Mock react-icons/fi
vi.mock('react-icons/fi', () => ({
  FiHome: () => <svg data-testid="FiHome-icon" />,
  FiGrid: () => <svg data-testid="FiGrid-icon" />,
  FiLayout: () => <svg data-testid="FiLayout-icon" />,
  FiShoppingCart: () => <svg data-testid="FiShoppingCart-icon" />,
  FiBriefcase: () => <svg data-testid="FiBriefcase-icon" />,
  FiBookOpen: () => <svg data-testid="FiBookOpen-icon" />,
  FiUser: () => <svg data-testid="FiUser-icon" />,
  FiFileText: () => <svg data-testid="FiFileText-icon" />,
  FiUsers: () => <svg data-testid="FiUsers-icon" />,
  FiSettings: () => <svg data-testid="FiSettings-icon" />,
  FiGlobe: () => <svg data-testid="FiGlobe-icon" />,
  FiPenTool: () => <svg data-testid="FiPenTool-icon" />,
  FiLink: () => <svg data-testid="FiLink-icon" />,
}));

describe('Sidebar', () => {
  it('renders user avatar and name', () => {
    render(
      <MemoryRouter>
        <Sidebar isCollapsed={false} />
      </MemoryRouter>
    );
    expect(screen.getByAltText('User Avatar')).toBeInTheDocument();
    expect(screen.getByText('ByeWind')).toBeInTheDocument();
  });

  it('renders all navigation sections and links', () => {
    render(
      <MemoryRouter>
        <Sidebar isCollapsed={false} />
      </MemoryRouter>
    );

    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getAllByText('Overview').length).toBe(2);
    expect(screen.getAllByText('Projects').length).toBe(3);

    expect(screen.getByText('Dashboards')).toBeInTheDocument();
    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getByText('eCommerce')).toBeInTheDocument();

    expect(screen.getByText('Pages')).toBeInTheDocument();
    expect(screen.getByText('User Profile')).toBeInTheDocument();
    expect(screen.getByText('Campaigns')).toBeInTheDocument();
  });

  it('applies active style to active link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Sidebar isCollapsed={false} />
      </MemoryRouter>
    );
    const overviewLink = screen.getByRole('link', { name: 'Overview', current: 'page' });
    expect(overviewLink).toHaveAttribute('data-is-active', 'true');
    expect(overviewLink).toHaveClass('font-semibold');
  });

  it('hides sidebar when isCollapsed is true', () => {
    render(
      <MemoryRouter>
        <Sidebar isCollapsed={true} />
      </MemoryRouter>
    );
    const sidebar = screen.getByRole('complementary'); // aside has role complementary
    expect(sidebar).toHaveClass('hidden');
  });

  it('shows sidebar when isCollapsed is false', () => {
    render(
      <MemoryRouter>
        <Sidebar isCollapsed={false} />
      </MemoryRouter>
    );
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).not.toHaveClass('hidden');
    expect(sidebar).toHaveClass('lg:flex'); // Ensure it's visible on large screens
  });
});