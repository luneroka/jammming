import Track from './Track';
import '../css/TrackList.css';

function TrackList(props) {
  return (
    <div className='track-list'>
      {props.tracks.map((track) => {
        return <Track track={track} key={track.id} />;
      })}
    </div>
  );
}

export default TrackList;
