import '../css/SearchBar.css';
import { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const searchSong = () => {};

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search for song, album or artist...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className='search-btn' onClick={searchSong}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
