function Track(props) {
  function onAddClick() {
    alert('clicked');
  }

  return (
    <div className='track'>
      <h3>{props.track.title}</h3>
      <p>
        {props.track.artist} | {props.track.album}
      </p>
      <button className='add-btn' onClick={onAddClick}>
        +
      </button>
    </div>
  );
}

export default Track;
