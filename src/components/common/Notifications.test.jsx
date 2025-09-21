import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders all notification items correctly', () => {
    render(<Notifications />);

    // Check for specific text content from the mock data
    expect(screen.getAllByText("You have a bug that needs...")).toHaveLength(2);
    expect(screen.getByText("Just now")).toBeInTheDocument();
    expect(screen.getByText("New user registered")).toBeInTheDocument();
    expect(screen.getByText("59 minutes ago")).toBeInTheDocument();
    expect(screen.getByText("Andi Lane subscribed to you")).toBeInTheDocument();
    expect(screen.getByText("Today, 11:59 AM")).toBeInTheDocument();

    // Check for the presence of icons (indirectly, by checking for their container or attributes if possible)
    // Since lucide-react renders SVG, we can look for SVG elements within the notification items.
    const notificationItems = screen.getAllByText(/You have a bug that needs...|New user registered|Andi Lane subscribed to you/i);
    notificationItems.forEach(item => {
      const parent = item.closest('.flex.items-center');
      expect(parent).toBeInTheDocument();
      expect(parent.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('applies custom className if provided', () => {
    render(<Notifications className="custom-class" />);
    expect(screen.getByTestId('notifications-container')).toHaveClass('custom-class');
  });
});
