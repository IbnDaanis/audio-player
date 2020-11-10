import { LibrarySong } from "./LibrarySong"

export const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className='library'>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong
            songs={songs}
            song={song}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  )
}
