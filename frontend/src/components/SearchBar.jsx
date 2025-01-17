import SearchResults from './SearchResults';
import { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault;
    alert(searchQuery);
    setSearchQuery('');
  };

  const searchSong = () => {};

  return (
    <form onSubmit={handleSearch} className='search-form'>
      <input
        type='text'
        placeholder='Search for song, album or artist...'
        className='search-input'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type='submit' className='search-btn' onClick={searchSong}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
