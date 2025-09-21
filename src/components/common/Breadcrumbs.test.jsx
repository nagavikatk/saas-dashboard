import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

let currentPathname = '/';

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useLocation: () => ({ pathname: currentPathname }),
  };
});

describe('Breadcrumbs', () => {
  beforeEach(() => {
    currentPathname = '/'; // Reset for each test
  });

  it('renders dashboard link for root path', () => {
    currentPathname = '/';
    render(
      <MemoryRouter initialEntries={[currentPathname]}>
        <Breadcrumbs />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Dashboard').closest('a')).toHaveAttribute('href', '/');
  });

  it('renders breadcrumbs for a single segment path', () => {
    currentPathname = '/orders';
    render(
      <MemoryRouter initialEntries={[currentPathname]}>
        <Breadcrumbs />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Orders')).not.toHaveAttribute('href'); // Last segment is not a link
  });

  it('renders breadcrumbs for a multi-segment path', () => {
    currentPathname = '/orders/123';
    render(
      <MemoryRouter initialEntries={[currentPathname]}>
        <Breadcrumbs />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Orders').closest('a')).toHaveAttribute('href', '/orders');
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('123')).not.toHaveAttribute('href'); // Last segment is not a link
  });

  it('capitalizes path segments correctly', () => {
    currentPathname = '/user-profile';
    render(
      <MemoryRouter initialEntries={[currentPathname]}>
        <Breadcrumbs />
      </MemoryRouter>
    );
    expect(screen.getByText('User-profile')).toBeInTheDocument();
  });
});