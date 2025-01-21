import React from 'react';
import SearchResults from './SearchResults';
import TrackList from '../TrackList/TrackList';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

vi.mock('./TrackList', () => ({
  __esModule: true,
  default: vi.fn(() => <div>Mocked TrackList</div>),
}));

// Clean up after each test
afterEach(() => {
  cleanup();
});

describe('SearchResults', () => {
  it('renders the heading and TrackList component.', () => {
    const mockTracks = [
      {
        id: 1,
        name: 'Track 1',
        artist: 'Artist 1',
        album: 'Album 1',
        uri: 'Track1uri',
      },
    ];
    const mockOnAdd = vi.fn();

    render(<SearchResults searchResults={mockTracks} onAdd={mockOnAdd} />);

    // Check that the heading is still rendered
    expect(screen.getByText('Results')).toBeInTheDocument();

    // Ensure TrackList was called with the correct props
    expect(TrackList).toHaveBeenCalledWith(
      { tracks: mockTracks, onAdd: mockOnAdd },
      {}
    );
  });

  it('renders correctly with no search results', () => {
    render(<SearchResults searchResults={[]} onAdd={() => {}} />);

    // Check that the heading is still rendered
    expect(screen.getByText('Results')).toBeInTheDocument();

    // Check that TrackList is rendered, even if empty
    expect(screen.getByText('Mocked TrackList')).toBeInTheDocument();

    // Ensure TrackList was called with an empty array
    expect(TrackList).toHaveBeenCalledWith(
      { tracks: [], onAdd: expect.any(Function) },
      {}
    );
  });
});
