import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card><div data-testid="child-content">Test Child</div></Card>);
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Card className="custom-card">Test Content</Card>);
    expect(screen.getByText('Test Content')).toHaveClass('custom-card');
  });
});