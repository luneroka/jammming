import React from 'react';
import Playlist from './Playlist';
import TrackList from '../TrackList/TrackList';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

vi.mock('./TrackList', () => ({
  __esModule: true,
  default: vi.fn(() => <div>Mocked TrackList</div>),
}));

// Clean up after each test
afterEach(() => {
  cleanup();
});

describe('Playlist', () => {
  it('renders the input field with the handleNameChange onChange attribute.', () => {
    const mockOnNameChange = vi.fn();

    render(<Playlist onNameChange={mockOnNameChange} />);

    const input = screen.getByDisplayValue('New Playlist');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Updated Playlist' } });
    expect(mockOnNameChange).toHaveBeenCalled();
  });

  it('renders the TrackList component.', () => {
    const mockTracks = [
      {
        id: 1,
        name: 'Track 1',
        artist: 'Artist 1',
        album: 'Album 1',
        uri: 'Track1uri',
      },
    ];
    const mockOnRemove = vi.fn();

    render(<Playlist playlistTracks={mockTracks} onRemove={mockOnRemove} />);

    expect(TrackList).toHaveBeenCalledWith(
      { tracks: mockTracks, onRemove: mockOnRemove, isRemoval: true },
      {}
    );
  });

  it('renders correctly with no tracks added to the Playlist.', () => {
    render(<Playlist playlistTracks={[]} onRemove={() => {}} />);

    expect(screen.getByDisplayValue('New Playlist')).toBeInTheDocument();

    expect(screen.getByText('Mocked TrackList')).toBeInTheDocument();
  });
});
