import './css/App.css';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import { useCallback, useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([
    { name: 'Rasputin', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Sunny', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
  ]);
  const [playlistName, setPlaylistName] = useState('MyPlaylist');
  const [playlistTracks, setPlaylistTracks] = useState([
    { name: 'Rasputin', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Sunny', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
  ]);

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
