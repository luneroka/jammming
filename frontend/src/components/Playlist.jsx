import TrackList from './TrackList';
import '../css/PlayList.css';

function Playlist(props) {
  return (
    <div className='playlist'>
      <h2>{props.playlistName}</h2>
      <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} />
      <button className='save-btn'>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
