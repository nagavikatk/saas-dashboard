import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import RightSidebar from './RightSidebar';

// Mock child components
vi.mock('../components/common/Notifications', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-notifications">Notifications Component</div>,
}));

// Mock lucide-react icons
vi.mock('lucide-react', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    X: vi.fn(() => <svg data-testid="x-icon" />),
  };
});

describe('RightSidebar', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('is hidden by default (translate-x-full class) when isOpen is false', () => {
    render(<RightSidebar isOpen={false} onClose={mockOnClose} />);
    const sidebarElement = screen.getByTestId('x-icon').closest('div.fixed');
    expect(sidebarElement).toHaveClass('translate-x-full');
  });

  it('renders when isOpen is true', () => {
    render(<RightSidebar isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByTestId('x-icon').closest('div')).not.toHaveClass('translate-x-full');
  });

  it('calls onClose when the close button is clicked', () => {
    render(<RightSidebar isOpen={true} onClose={mockOnClose} />);
    fireEvent.click(screen.getByTestId('x-icon'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking outside the sidebar', () => {
    render(
      <div>
        <div data-testid="outside-element">Outside</div>
        <RightSidebar isOpen={true} onClose={mockOnClose} />
      </div>
    );
    fireEvent.mouseDown(screen.getByTestId('outside-element'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when clicking inside the sidebar', () => {
    render(
      <RightSidebar isOpen={true} onClose={mockOnClose} />
    );
    fireEvent.mouseDown(screen.getByText('Notifications')); // Click on a heading inside
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('renders content sections: Notifications, Activities, Contacts', () => {
    render(<RightSidebar isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Activities')).toBeInTheDocument();
    expect(screen.getByText('Contacts')).toBeInTheDocument();
  });

  it('renders sample activity items', () => {
    render(<RightSidebar isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('You have a bug that needs...')).toBeInTheDocument();
    expect(screen.getByText('Released a new version')).toBeInTheDocument();
  });

  it('renders sample contact items', () => {
    render(<RightSidebar isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('Natali Craig')).toBeInTheDocument();
    expect(screen.getByText('Drew Cano')).toBeInTheDocument();
  });
});
