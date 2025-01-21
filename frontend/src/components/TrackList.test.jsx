import React from 'react';
import TrackList from './TrackList';
import Track from './Track';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

vi.mock('./Track', () => ({
  _esModule: true,
  default: vi.fn(() => <div>Mocked Track</div>),
}));

// Clean up after each test
afterEach(() => {
  cleanup();
});

describe('TrackList', () => {
  const mockTracks = [
    {
      id: 1,
      name: 'Track 1',
      artist: 'Artist 1',
      album: 'Album 1',
      uri: 'Track1uri',
    },
    {
      id: 2,
      name: 'Track 2',
      artist: 'Artist 2',
      album: 'Album 2',
      uri: 'Track2uri',
    },
  ];
  const mockOnAdd = vi.fn();
  const mockOnRemove = vi.fn();

  it('renders the correct number of Track components.', () => {
    render(
      <TrackList
        tracks={mockTracks}
        onAdd={mockOnAdd}
        onRemove={mockOnRemove}
        isRemoval={false}
      />
    );

    // Ensure Track is rendered the correct number of times
    expect(screen.getAllByText('Mocked Track')).toHaveLength(mockTracks.length);
  });

  it('passes correct props to each Track component.', () => {
    render(
      <TrackList
        tracks={mockTracks}
        onAdd={mockOnAdd}
        onRemove={mockOnRemove}
        isRemoval={false}
      />
    );
    mockTracks.forEach((track, index) => {
      expect(Track).toHaveBeenNthCalledWith(
        index + 1,
        expect.objectContaining({
          track: track,
          onAdd: mockOnAdd,
          onRemove: mockOnRemove,
          isRemoval: false,
        }),
        {}
      );
    });
  });

  it('renders correctly when no tracks are provided.', () => {
    render(
      <TrackList
        tracks={[]}
        onAdd={() => {}}
        onRemove={() => {}}
        isRemoval={false}
      />
    );

    // Ensure not Track components are rendered
    expect(screen.queryByText('Mocked Track')).not.toBeInTheDocument();
  });
});
