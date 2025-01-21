import React from 'react';
import Track from './Track';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Clean up after each test
afterEach(() => {
  cleanup();
});

describe('Track', () => {
  const mockTrack = {
    id: 1,
    name: 'Track 1',
    artist: 'Artist 1',
    album: 'Album 1',
    uri: 'Track1uri',
  };
  const mockOnAdd = vi.fn();
  const mockOnRemove = vi.fn();

  it('renders track name, artist, and album', () => {
    render(
      <Track
        track={mockTrack}
        onAdd={mockOnAdd}
        onRemove={mockOnRemove}
        isRemoval={false}
      />
    );
    expect(screen.getByText('Track 1')).toBeInTheDocument();
    expect(screen.getByText('Artist 1 | Album 1')).toBeInTheDocument();
  });

  it('renders a + button with addTrack onClick when isRemoval is false.', () => {
    render(
      <Track
        track={mockTrack}
        onAdd={mockOnAdd}
        onRemove={mockOnRemove}
        isRemoval={false}
      />
    );
    const addButton = screen.getByText('+');
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton);
    expect(mockOnAdd).toHaveBeenCalledWith(mockTrack);
  });

  it('renders a - button with removeTrack onClick when isRemoval is true.', () => {
    render(
      <Track
        track={mockTrack}
        onAdd={mockOnAdd}
        onRemove={mockOnRemove}
        isRemoval={true}
      />
    );
    const removeButton = screen.getByText('-');
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);
    expect(mockOnRemove).toHaveBeenCalledWith(mockTrack);
  });
});
