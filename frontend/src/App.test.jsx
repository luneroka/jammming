import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';
import * as Spotify from './services/Spotify';

// Clean up after each test
afterEach(() => {
  cleanup();
});

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText('Search for song...')
    ).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Results')).toBeInTheDocument();
    expect(screen.getByDisplayValue('New Playlist')).toBeInTheDocument();
  });

  it('updates the playlist name when updatePlaylistName is called', () => {
    render(<App />);
    const input = screen.getByDisplayValue('New Playlist');

    fireEvent.change(input, { target: { value: 'Updated Playlist' } });

    expect(screen.getByDisplayValue('Updated Playlist')).toBeInTheDocument();
  });
});
