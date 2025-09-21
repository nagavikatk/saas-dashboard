import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
  it('renders "Searching..." when loading is true', () => {
    render(<SearchResults results={[]} loading={true} />);
    expect(screen.getByText('Searching...')).toBeInTheDocument();
    expect(screen.queryByText('No results found.')).not.toBeInTheDocument();
  });

  it('renders "No results found." when loading is false and results are empty', () => {
    render(<SearchResults results={[]} loading={false} />);
    expect(screen.getByText('No results found.')).toBeInTheDocument();
    expect(screen.queryByText('Searching...')).not.toBeInTheDocument();
  });

  it('renders search results correctly when loading is false and results are present', () => {
    const sampleResults = [
      { id: '1', name: 'Product A', price: '$10.00' },
      { id: '2', name: 'Product B', price: '$20.00' },
    ];
    render(<SearchResults results={sampleResults} loading={false} />);

    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
    expect(screen.getByText('Product B')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.queryByText('Searching...')).not.toBeInTheDocument();
    expect(screen.queryByText('No results found.')).not.toBeInTheDocument();
  });

  it('does not render results when loading is true, even if results are present', () => {
    const sampleResults = [
      { id: '1', name: 'Product A', price: '$10.00' },
    ];
    render(<SearchResults results={sampleResults} loading={true} />);
    expect(screen.getByText('Searching...')).toBeInTheDocument();
    expect(screen.queryByText('Product A')).not.toBeInTheDocument();
  });
});
