import TrackList from './TrackList';
import '../css/PlayList.css';
import { useCallback } from 'react';

function Playlist({ onNameChange, playlistTracks, onRemove, onSave }) {
  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  return (
    <div className='playlist'>
      <input onChange={handleNameChange} defaultValue={'New Playlist'} />
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      <button className='save-btn' onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
