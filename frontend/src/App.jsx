import './App.css';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([
    { name: 'Rasputin', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Sunny', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
  ]);
  const [playlistName, setPlaylistName] = useState('MyPlaylist');
  const [playlistTracks, setPlaylistTracks] = useState([
    { name: 'Rasputin', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Sunny', album: 'The Very Best Of', artist: 'Boney M' },
    { name: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
  ]);

  return (
    <>
      <h1>Jammming</h1>
      <div className='app'>
        <SearchBar />
        <SearchResults searchResults={searchResults} />
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
      </div>
    </>
  );
}

export default App;
