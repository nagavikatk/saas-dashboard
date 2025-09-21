import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WorldMapChart from './WorldMapChart';

// Mock the @react-jvectormap/core and @react-jvectormap/world components
vi.mock('@react-jvectormap/core', () => ({
  VectorMap: () => (
    <div data-testid="mock-vector-map"></div>
  ),
}));

vi.mock('@react-jvectormap/world', () => ({
  worldMill: {},
}));

describe('WorldMapChart', () => {
  it('renders without crashing', () => {
    render(<WorldMapChart />);
    expect(screen.getByText('Revenue by Location')).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    render(<WorldMapChart />);
    expect(screen.getByRole('heading', { name: /Revenue by Location/i })).toBeInTheDocument();
  });

  it('displays city names and revenues', () => {
    render(<WorldMapChart />);
    expect(screen.getByText('New York')).toBeInTheDocument();
    expect(screen.getByText('72K')).toBeInTheDocument();
    expect(screen.getByText('San Francisco')).toBeInTheDocument();
    expect(screen.getByText('39k')).toBeInTheDocument();
    expect(screen.getByText('Sydney')).toBeInTheDocument();
    expect(screen.getByText('25K')).toBeInTheDocument();
    expect(screen.getByText('Singapore')).toBeInTheDocument();
    expect(screen.getByText('61K')).toBeInTheDocument();
  });

  it('renders the mocked VectorMap component', () => {
    render(<WorldMapChart />);
    expect(screen.getByTestId('mock-vector-map')).toBeInTheDocument();
  });
});