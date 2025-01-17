import './App.css';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([
    { title: 'Rasputin', album: 'The Very Best Of', artist: 'Boney M' },
    { title: 'Sunny', album: 'The Very Best Of', artist: 'Boney M' },
    { title: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
  ]);
  return (
    <>
      <h1>Jammming</h1>
      <div className='app'>
        <SearchBar />
        <SearchResults searchResults={searchResults} />
      </div>
    </>
  );
}

export default App;
