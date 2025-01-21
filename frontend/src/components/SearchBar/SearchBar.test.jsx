import React from 'react';
import SearchBar from './SearchBar';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Clean up after each test
afterEach(() => {
  cleanup();
});

describe('SearchBar', () => {
  it('renders the input field and updates state on change.', () => {
    render(<SearchBar onSearch={vi.fn()} />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Updated Value' } });
    expect(input.value).toBe('Updated Value');
  });

  it('calls onSearch with the correct term when the search button is clicked.', () => {
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'Search Term' } });
    fireEvent.click(button);

    expect(mockSearch).toHaveBeenCalledWith('Search Term');
  });
});
