import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RevenueChart from './RevenueChart';

// Mock recharts components
vi.mock('recharts', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    ResponsiveContainer: ({ children }) => <div data-testid="responsive-container">{children}</div>,
    LineChart: vi.fn(({ children, data }) => (
      <div data-testid="line-chart" data-chart-data={JSON.stringify(data)}>{children}</div>
    )),
    Line: vi.fn((props) => <div data-testid="line" data-line-props={JSON.stringify(props)}></div>),
    XAxis: vi.fn((props) => <div data-testid="x-axis" data-axis-props={JSON.stringify(props)}></div>),
    YAxis: vi.fn((props) => <div data-testid="y-axis" data-axis-props={JSON.stringify(props)}></div>),
    CartesianGrid: vi.fn((props) => <div data-testid="cartesian-grid" data-grid-props={JSON.stringify(props)}></div>),
    Tooltip: vi.fn((props) => <div data-testid="tooltip" data-tooltip-props={JSON.stringify(props)}></div>),
    Legend: vi.fn((props) => <div data-testid="legend" data-legend-props={JSON.stringify(props)}></div>),
  };
});

describe('RevenueChart', () => {
  it('renders without crashing', () => {
    render(<RevenueChart />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    render(<RevenueChart />);
    expect(screen.getByRole('heading', { name: /Revenue/i })).toBeInTheDocument();
  });

  it('displays current and previous week labels', () => {
    render(<RevenueChart />);
    expect(screen.getByText(/Current Week:/i)).toBeInTheDocument();
    expect(screen.getByText(/Previous Week:/i)).toBeInTheDocument();
  });

  it('renders the LineChart component with correct data and elements', () => {
    render(<RevenueChart />);

    // Check if the mocked LineChart is rendered
    const lineChart = screen.getByTestId('line-chart');
    expect(lineChart).toBeInTheDocument();

    // Check if the data is passed correctly to LineChart
    const expectedData = [
      { name: 'Mon', 'Current Week': 500, 'Previous Week': 750 },
      { name: 'Tue', 'Current Week': 750, 'Previous Week': 900 },
      { name: 'Wed', 'Current Week': 900, 'Previous Week': 750 },
      { name: 'Thu', 'Current Week': 750, 'Previous Week': 500 },
      { name: 'Fri', 'Current Week': 500, 'Previous Week': 250 },
      { name: 'Sat', 'Current Week': 250, 'Previous Week': 500 },
      { name: 'Sun', 'Current Week': 500, 'Previous Week': 750 },
    ];
    expect(JSON.parse(lineChart.dataset.chartData)).toEqual(expectedData);

    // Check if sub-components are rendered
    expect(screen.getByTestId('x-axis')).toBeInTheDocument();
    expect(screen.getByTestId('y-axis')).toBeInTheDocument();
    expect(screen.getByTestId('tooltip')).toBeInTheDocument();
    expect(screen.getByTestId('cartesian-grid')).toBeInTheDocument();
    // Removed: expect(screen.getByTestId('legend')).toBeInTheDocument(); // Legend is commented out in the component

    // Check for the two Line components
    const lines = screen.getAllByTestId('line');
    expect(lines).toHaveLength(2);
    expect(JSON.parse(lines[0].dataset.lineProps).dataKey).toBe('Current Week');
    expect(JSON.parse(lines[1].dataset.lineProps).dataKey).toBe('Previous Week');
  });
});
