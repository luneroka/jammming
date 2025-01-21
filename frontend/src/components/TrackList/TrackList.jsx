import Track from '../Track/Track';
import './TrackList.css';

function TrackList({ tracks = [], onAdd, isRemoval, onRemove }) {
  return (
    <div className='track-list'>
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
