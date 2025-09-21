import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DataTable from './DataTable';

describe('DataTable', () => {
  const sampleColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
  ];

  const sampleData = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 24 },
  ];

  it('renders the table with a title', () => {
    render(<DataTable columns={sampleColumns} data={sampleData} title="User List" />);
    expect(screen.getByRole('heading', { name: /user list/i })).toBeInTheDocument();
  });

  it('renders the table without a title', () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders column headers correctly', () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /age/i })).toBeInTheDocument();
  });

  it('renders data rows and cells correctly', () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);

    // Check for Alice's row
    expect(screen.getByRole('cell', { name: /alice/i })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /30/i })).toBeInTheDocument();

    // Check for Bob's row
    expect(screen.getByRole('cell', { name: /bob/i })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /24/i })).toBeInTheDocument();
  });

  it('applies specific class for "name" column', () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const aliceNameCell = screen.getByRole('cell', { name: 'Alice' });
    expect(aliceNameCell).toHaveClass('font-semibold');
  });
});
