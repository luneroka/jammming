import './css/App.css';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import { useCallback, useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: 'Rasputin',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:1234',
    },
    {
      id: 3,
      name: 'Sunny',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:5678',
    },
    {
      id: 4,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:91011',
    },
    {
      id: 5,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:1213',
    },
    {
      id: 6,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:1415',
    },
    {
      id: 7,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:1617',
    },
    {
      id: 8,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:1819',
    },
    {
      id: 9,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:2021',
    },
    {
      id: 10,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:2223',
    },
    {
      id: 11,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:2425',
    },
    {
      id: 12,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:2627',
    },
    {
      id: 13,
      name: 'Daddy Cool',
      album: 'The Very Best Of',
      artist: 'Boney M',
      uri: 'spotify:album:2829',
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

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

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
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
