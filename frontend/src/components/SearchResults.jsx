import TrackList from './TrackList';
import '../css/SearchResults.css';

function SearchResults(props) {
  return (
    <div className='search-results'>
      <h2>Results</h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
}

export default SearchResults;
