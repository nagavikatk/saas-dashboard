import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WorkInProgress from './WorkInProgress';

describe('WorkInProgress', () => {
  it('renders the "Work in Progress" heading', () => {
    render(<WorkInProgress />);
    expect(screen.getByRole('heading', { name: /work in progress/i })).toBeInTheDocument();
  });

  it('renders the descriptive text', () => {
    render(<WorkInProgress />);
    expect(screen.getByText(/this page is currently under construction/i)).toBeInTheDocument();
  });

  it('renders the "Work in Progress" image', () => {
    render(<WorkInProgress />);
    const image = screen.getByAltText('Work in Progress');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/page-0001.svg');
  });
});
