import './App.css';
import SearchResults from './components/SearchResults';

const searchResults = [
  { title: 'Rasputin', album: 'The Very Best Of', artist: 'Boney M' },
  { title: 'Sunny', album: 'The Very Best Of', artist: 'Boney M' },
  { title: 'Daddy Cool', album: 'The Very Best Of', artist: 'Boney M' },
];

function App() {
  return <>
    <SearchResults searchResults={searchResults}/>
  </>;
}

export default App;
