import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Pagination from './Pagination';

describe('Pagination', () => {
  const mockOnPageChange = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correct number of page buttons', () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />
    );
    expect(screen.getAllByRole('button')).toHaveLength(7); // 5 page numbers + prev + next
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('disables previous button on first page', () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />
    );
    expect(screen.getByText('<<')).toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={mockOnPageChange} />
    );
    expect(screen.getByText('>>')).toBeDisabled();
  });

  it('enables previous and next buttons on middle pages', () => {
    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />
    );
    expect(screen.getByText('<<')).not.toBeDisabled();
    expect(screen.getByText('>>')).not.toBeDisabled();
  });

  it('calls onPageChange with correct page number when a page button is clicked', () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />
    );
    fireEvent.click(screen.getByText('3'));
    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange with correct page number when previous button is clicked', () => {
    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />
    );
    fireEvent.click(screen.getByText('<<'));
    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange with correct page number when next button is clicked', () => {
    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />
    );
    fireEvent.click(screen.getByText('>>'));
    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  it('does not call onPageChange when previous button is clicked on first page', () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />
    );
    fireEvent.click(screen.getByText('<<'));
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });

  it('does not call onPageChange when next button is clicked on last page', () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={mockOnPageChange} />
    );
    fireEvent.click(screen.getByText('>>'));
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });
});
