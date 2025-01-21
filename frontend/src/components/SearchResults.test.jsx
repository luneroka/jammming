import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('SearchResults', () => {
  it('renders search results into <TrackList /> component.', () => {
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
      {
        id: 3,
        name: 'Track 3',
        artist: 'Artist 3',
        album: 'Album 3',
        uri: 'Track3uri',
      },
    ];

    render(<SearchResults tracks={mockTracks} />);
    expect(screen.getByText('Results')).toBeInTheDocument();
  });
});
