import { playAudio } from '../utils'
export const LibrarySong = ({ song, songs, setSongs, setCurrentSong, audioRef, isPlaying, id }) => {
  const songSelectHandler = () => {
    setCurrentSong(song)

    const newSongs = songs.map(song => {
      if (song.id === id) {
        return {
          ...song, active: true
        }
      } else {
        return {
          ...song, active: false
        }
      }
    })
    setSongs(newSongs)
    playAudio(isPlaying, audioRef)
  }
  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active && 'selected'}`} >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        {song.active && <h5>Now Playing</h5>}
      </div>
    </div>
  )
}
