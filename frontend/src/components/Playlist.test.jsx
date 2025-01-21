import React from 'react';
import Playlist from './Playlist';
import TrackList from './TrackList';
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

describe('Playlist', () => {});
