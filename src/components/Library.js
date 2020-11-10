import { LibrarySong } from "./LibrarySong"

export const Library = ({ songs }) => {
  return (
    <div className='library'>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong song={song} key={song.id} />
        ))}
      </div>
    </div>
  )
}
