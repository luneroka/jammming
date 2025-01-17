import './css/App.css';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import { useCallback, useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Rasputin', album: 'The Very Best Of', artist: 'Boney M' },
    { id: 3, name: 'Sunny', album: 'The Very Best Of', artist: 'Boney M' },
    { id: 4, name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { id: 5, name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { id: 6, name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { id: 7, name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { id: 8, name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { id: 9, name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    {
      id: 10,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
    },
    {
      id: 11,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
    },
    {
      id: 12,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
    },
    {
      id: 13,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
    },
  ]);
  const [playlistName, setPlaylistName] = useState('MyPlaylist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack === track.id)) return;
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  return (
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div className='app'>
        <SearchBar />
        <div className='app-playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
