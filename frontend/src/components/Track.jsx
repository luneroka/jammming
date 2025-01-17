import { useCallback } from 'react';
import '../css/Track.css';

function Track(props) {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  return (
    <div className='track'>
      <div className='track-information'>
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      <button className='track-action'>+</button>
    </div>
  );
}

export default Track;
