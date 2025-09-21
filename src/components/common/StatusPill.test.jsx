import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StatusPill from './StatusPill';

describe('StatusPill', () => {
  it('renders with "Complete" status and correct styling', () => {
    render(<StatusPill status="Complete" />);
    const pill = screen.getByText('Complete');
    expect(pill).toBeInTheDocument();
    expect(pill).toHaveClass('bg-status-green-bg');
    expect(pill).toHaveClass('text-status-green');
  });

  it('renders with "In Progress" status and correct styling', () => {
    render(<StatusPill status="In Progress" />);
    const pill = screen.getByText('In Progress');
    expect(pill).toBeInTheDocument();
    expect(pill).toHaveClass('bg-status-blue-bg');
    expect(pill).toHaveClass('text-status-blue');
  });

  it('renders with "Pending" status and correct styling', () => {
    render(<StatusPill status="Pending" />);
    const pill = screen.getByText('Pending');
    expect(pill).toBeInTheDocument();
    expect(pill).toHaveClass('bg-status-yellow-bg');
    expect(pill).toHaveClass('text-status-yellow');
  });

  it('renders with "Approved" status and correct styling', () => {
    render(<StatusPill status="Approved" />);
    const pill = screen.getByText('Approved');
    expect(pill).toBeInTheDocument();
    expect(pill).toHaveClass('bg-status-green-bg');
    expect(pill).toHaveClass('text-status-green');
  });

  it('renders with "Rejected" status and correct styling', () => {
    render(<StatusPill status="Rejected" />);
    const pill = screen.getByText('Rejected');
    expect(pill).toBeInTheDocument();
    expect(pill).toHaveClass('bg-status-red-bg');
    expect(pill).toHaveClass('text-status-red');
  });

  it('renders with default styling for an unknown status', () => {
    render(<StatusPill status="Unknown" />);
    const pill = screen.getByText('Unknown');
    expect(pill).toBeInTheDocument();
    expect(pill).toHaveClass('bg-status-gray-bg');
    expect(pill).toHaveClass('text-status-gray');
  });
});
