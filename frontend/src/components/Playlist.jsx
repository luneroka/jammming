import TrackList from './TrackList';

function Playlist(props) {
  return (
    <div className='playlist'>
      <h2>{props.playlistName}</h2>
      <TrackList tracks={props.playlistTracks} />
      <button className='save-btn'>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
