import TrackList from './TrackList';

function SearchResults(props) {
  return (
    <div className='search-results'>
      <h2>Results</h2>
      <TrackList tracks={props.searchResults} />
    </div>
  );
}

export default SearchResults;
