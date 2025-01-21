import Track from './Track';
import '../css/TrackList.css';

function TrackList({ tracks = [] }) {
  return (
    <div className='track-list'>
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
