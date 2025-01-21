import { useCallback } from 'react';
import '../css/Track.css';

function Track({ track = {}, onAdd, onRemove, isRemoval }) {
  const addTrack = useCallback(
    (event) => {
      onAdd(track);
    },
    [onAdd, track]
  );

  const removeTrack = useCallback(
    (event) => {
      onRemove(track);
    },
    [onRemove, track]
  );

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className='track-action' onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className='track-action' onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className='track'>
      <div className='track-information'>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
