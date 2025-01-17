import '../css/Track.css';

function Track(props) {
  function onAddClick() {
    alert('clicked');
  }

  return (
    <div className='track'>
      <div className='track-information'>
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      <button className='track-action' onClick={onAddClick}>
        +
      </button>
    </div>
  );
}

export default Track;
