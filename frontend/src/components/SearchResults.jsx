import TrackList from './TrackList';
import '../css/SearchResults.css';

function SearchResults({ searchResults = [], onAdd }) {
  return (
    <div className='search-results'>
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} />
    </div>
  );
}

export default SearchResults;
