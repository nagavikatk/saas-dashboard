import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StatsCard from './StatsCard';

describe('StatsCard', () => {
  it('renders title, value, prefix, and suffix correctly', () => {
    render(
      <StatsCard
        title="Total Revenue"
        value="10,000"
        prefix="$"
        suffix=".00"
        change="5%"
        isPositive={true}
      />
    );
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
    expect(screen.getByText('$10,000.00')).toBeInTheDocument();
  });

  it('renders positive change with ArrowUpRight icon', () => {
    render(
      <StatsCard
        title="Total Revenue"
        value="10,000"
        change="5%"
        isPositive={true}
      />
    );
    expect(screen.getByText('5%')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-up-right')).toBeInTheDocument();
    expect(screen.queryByTestId('arrow-down-right')).not.toBeInTheDocument();
  });

  it('renders negative change with ArrowDownRight icon', () => {
    render(
      <StatsCard
        title="Total Revenue"
        value="10,000"
        change="-2%"
        isPositive={false}
      />
    );
    expect(screen.getByText('-2%')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-down-right')).toBeInTheDocument();
    expect(screen.queryByTestId('arrow-up-right')).not.toBeInTheDocument();
  });

  it('applies custom background and text classes', () => {
    render(
      <StatsCard
        title="Total Revenue"
        value="10,000"
        change="5%"
        isPositive={true}
        bgClass="bg-red-100"
        textClass="text-red-800"
      />
    );
    const cardElement = screen.getByText('Total Revenue').closest('.p-6');
    expect(cardElement).toHaveClass('bg-red-100');
    expect(screen.getByText('Total Revenue')).toHaveClass('text-red-800');
  });
});
