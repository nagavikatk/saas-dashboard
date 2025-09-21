import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectionsChart from './ProjectionsChart';

// Mock recharts components
vi.mock('recharts', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    ResponsiveContainer: ({ children }) => <div data-testid="responsive-container">{children}</div>,
    BarChart: vi.fn(({ children, data }) => (
      <div data-testid="bar-chart" data-chart-data={JSON.stringify(data)}>{children}</div>
    )),
    Bar: vi.fn((props) => <div data-testid="bar" data-bar-props={JSON.stringify(props)}></div>),
    XAxis: vi.fn((props) => <div data-testid="x-axis" data-axis-props={JSON.stringify(props)}></div>),
    YAxis: vi.fn((props) => <div data-testid="y-axis" data-axis-props={JSON.stringify(props)}></div>),
    CartesianGrid: vi.fn((props) => <div data-testid="cartesian-grid" data-grid-props={JSON.stringify(props)}></div>),
    Tooltip: vi.fn((props) => <div data-testid="tooltip" data-tooltip-props={JSON.stringify(props)}></div>),
  };
});

describe('ProjectionsChart', () => {
  it('renders without crashing', () => {
    render(<ProjectionsChart />);
    expect(screen.getByText('Projections vs Actuals')).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    render(<ProjectionsChart />);
    expect(screen.getByRole('heading', { name: /Projections vs Actuals/i })).toBeInTheDocument();
  });

  it('renders the BarChart component with correct data and elements', () => {
    render(<ProjectionsChart />);

    // Check if the mocked BarChart is rendered
    const barChart = screen.getByTestId('bar-chart');
    expect(barChart).toBeInTheDocument();

    // Check if the data is passed correctly to BarChart
    const expectedData = [
      { month: 'Jan', projections: 40, actuals: 35 },
      { month: 'Feb', projections: 45, actuals: 42 },
      { month: 'Mar', projections: 50, actuals: 51 },
      { month: 'Apr', projections: 48, actuals: 43 },
      { month: 'May', projections: 52, actuals: 54 },
      { month: 'Jun', projections: 55, actuals: 52 }
    ];
    expect(JSON.parse(barChart.dataset.chartData)).toEqual(expectedData);

    // Check if sub-components are rendered
    expect(screen.getByTestId('x-axis')).toBeInTheDocument();
    expect(screen.getByTestId('y-axis')).toBeInTheDocument();
    expect(screen.getByTestId('tooltip')).toBeInTheDocument();
    expect(screen.getByTestId('cartesian-grid')).toBeInTheDocument();

    // Check for the two Bar components
    const bars = screen.getAllByTestId('bar');
    expect(bars).toHaveLength(2);
    expect(JSON.parse(bars[0].dataset.barProps).dataKey).toBe('projections');
    expect(JSON.parse(bars[1].dataset.barProps).dataKey).toBe('actuals');
  });
});