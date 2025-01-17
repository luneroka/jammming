function Track({ track }) {
  function onAddClick() {
    alert('clicked');
  }

  return (
    <div className='track'>
      <h3>{track.title}</h3>
      <p>
        {track.artist} | {track.album}
      </p>
      <button className='add-btn' onClick={onAddClick}>
        +
      </button>
    </div>
  );
}

export default Track;
