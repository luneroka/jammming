import '../css/SearchBar.css';
import { useState, useCallback } from 'react';

function SearchBar(props) {
  const [term, setTerm] = useState('');

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

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
