import '../css/SearchBar.css';
import { useState, useCallback } from 'react';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    onSearch(term);
  }, [onSearch, term]);

  return (
    <div className='search-bar'>
      <input placeholder='Search for song...' onChange={handleTermChange} />
      <button className='search-btn' onClick={search}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
