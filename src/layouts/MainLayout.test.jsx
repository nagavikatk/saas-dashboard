import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

// Mock child components
vi.mock('./Sidebar', () => ({
  __esModule: true,
  default: ({ isCollapsed }) => (
    <div data-testid="mock-sidebar">Sidebar {isCollapsed ? 'Collapsed' : 'Open'}</div>
  ),
}));

vi.mock('./Header', () => ({
  __esModule: true,
  default: ({ toggleSidebar, toggleNotifications, toggleRightPanel }) => (
    <div data-testid="mock-header">
      <button onClick={toggleSidebar} data-testid="toggle-sidebar-button">Toggle Sidebar</button>
      <button onClick={toggleNotifications} data-testid="toggle-notifications-button">Toggle Notifications</button>
      <button onClick={toggleRightPanel} data-testid="toggle-right-panel-button">Toggle Right Panel</button>
    </div>
  ),
}));

vi.mock('../components/common/Notifications', () => ({
  __esModule: true,
  default: ({ isOpen }) => (
    isOpen ? <div data-testid="mock-notifications">Notifications Open</div> : null
  ),
}));

vi.mock('./RightSidebar', () => ({
  __esModule: true,
  default: ({ isOpen }) => (
    isOpen ? <div data-testid="mock-right-sidebar">Right Sidebar Open</div> : null
  ),
}));

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    Outlet: () => <div data-testid="mock-outlet">Outlet Content</div>,
  };
});

describe('MainLayout', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders Sidebar, Header, Outlet, and RightSidebar initially', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    expect(screen.getByTestId('mock-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-outlet')).toBeInTheDocument();
    expect(screen.queryByTestId('mock-notifications')).not.toBeInTheDocument();
    expect(screen.queryByTestId('mock-right-sidebar')).not.toBeInTheDocument();
  });

  it('toggles sidebar collapse state when button is clicked', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    const toggleSidebarButton = screen.getByTestId('toggle-sidebar-button');

    expect(screen.getByText('Sidebar Open')).toBeInTheDocument();
    fireEvent.click(toggleSidebarButton);
    expect(screen.getByText('Sidebar Collapsed')).toBeInTheDocument();
    fireEvent.click(toggleSidebarButton);
    expect(screen.getByText('Sidebar Open')).toBeInTheDocument();
  });

  it('toggles notifications visibility when button is clicked', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    const toggleNotificationsButton = screen.getByTestId('toggle-notifications-button');

    expect(screen.queryByTestId('mock-notifications')).not.toBeInTheDocument();
    fireEvent.click(toggleNotificationsButton);
    expect(screen.getByTestId('mock-notifications')).toBeInTheDocument();
    fireEvent.click(toggleNotificationsButton);
    expect(screen.queryByTestId('mock-notifications')).not.toBeInTheDocument();
  });

  it('toggles right panel visibility when button is clicked', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    const toggleRightPanelButton = screen.getByTestId('toggle-right-panel-button');

    expect(screen.queryByTestId('mock-right-sidebar')).not.toBeInTheDocument();
    fireEvent.click(toggleRightPanelButton);
    expect(screen.getByTestId('mock-right-sidebar')).toBeInTheDocument();
    fireEvent.click(toggleRightPanelButton);
    expect(screen.queryByTestId('mock-right-sidebar')).not.toBeInTheDocument();
  });
});
