function SearchBar() {
  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch} className='search-form'>
      <input
        type='text'
        placeholder='Search for song, album or artist...'
        className='search-input'
      />
      <button type='submit' className='search-btn'>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
