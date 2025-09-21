import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SalesDonutChart from './SalesDonutChart';
import { ThemeContext } from '../../contexts/ThemeContext';

// Mock the ThemeContext
const mockThemeContext = {
  theme: 'light',
  setTheme: () => {},
};

// Mock recharts components
vi.mock('recharts', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    ResponsiveContainer: ({ children }) => <div data-testid="responsive-container">{children}</div>,
    PieChart: vi.fn(({ children }) => (
      <div data-testid="pie-chart">{children}</div>
    )),
    Pie: vi.fn(({ children, data, ...props }) => (
      <div data-testid="pie" data-pie-data={JSON.stringify(data)} data-pie-props={JSON.stringify(props)}>{children}</div>
    )),
    Cell: vi.fn((props) => <div data-testid="cell" data-cell-props={JSON.stringify(props)}></div>),
  };
});

describe('SalesDonutChart', () => {
  it('renders without crashing', () => {
    render(
      <ThemeContext.Provider value={mockThemeContext}>
        <SalesDonutChart />
      </ThemeContext.Provider>
    );
    expect(screen.getByText('Total Sales')).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    render(
      <ThemeContext.Provider value={mockThemeContext}>
        <SalesDonutChart />
      </ThemeContext.Provider>
    );
    expect(screen.getByRole('heading', { name: /Total Sales/i })).toBeInTheDocument();
  });

  it('displays sales categories and values', () => {
    render(
      <ThemeContext.Provider value={mockThemeContext}>
        <SalesDonutChart />
      </ThemeContext.Provider>
    );
    expect(screen.getByText('Direct')).toBeInTheDocument();
    expect(screen.getByText('$300.56')).toBeInTheDocument();
    expect(screen.getByText('Affiliate')).toBeInTheDocument();
    expect(screen.getByText('$135.18')).toBeInTheDocument();
    expect(screen.getByText('Sponsored')).toBeInTheDocument();
    expect(screen.getByText('$154.02')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('$48.96')).toBeInTheDocument();
  });

  it('renders the PieChart component with correct data and elements', () => {
    render(
      <ThemeContext.Provider value={mockThemeContext}>
        <SalesDonutChart />
      </ThemeContext.Provider>
    );

    // Check if the mocked PieChart is rendered
    const pieChart = screen.getByTestId('pie-chart');
    expect(pieChart).toBeInTheDocument();

    // Check if the Pie component is rendered with correct data
    const pie = screen.getByTestId('pie');
    expect(pie).toBeInTheDocument();

    const expectedData = [
      { name: 'Direct', value: 300.56, color: '#95A4FC' },
      { name: 'Affiliate', value: 135.18, color: '#B1E3FF' },
      { name: 'Sponsored', value: 154.02, color: '#BAEDBD' },
      { name: 'E-mail', value: 48.96, color: mockThemeContext.theme === 'dark' ? '#C6C7F8' : '#1C1C1C' },
    ];
    expect(JSON.parse(pie.dataset.pieData)).toEqual(expectedData);

    // Check for Cell components (rendered inside Pie)
    const cells = screen.getAllByTestId('cell');
    expect(cells).toHaveLength(expectedData.length);
    expect(JSON.parse(cells[0].dataset.cellProps).fill).toBe('#95A4FC');
  });
});