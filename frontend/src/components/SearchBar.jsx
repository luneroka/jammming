import React from 'react';

function SearchBar() {
  return (
    <form className='search-form'>
      <input type='text' placeholder='Search for song, album or artist...' />
      <button>Search</button>
    </form>
  );
}
