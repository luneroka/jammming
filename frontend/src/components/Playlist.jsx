import TrackList from './TrackList';
import '../css/PlayList.css';
import { useCallback } from 'react';

function Playlist(props) {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div className='playlist'>
      <input onChange={handleNameChange} defaultValue={'New Playlist'} />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className='save-btn'>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
