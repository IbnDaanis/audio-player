import { useState } from 'react'
import { Player } from './components/Player'
import { Song } from './components/Song'
import './styles/app.scss'
import data from './data'
export const App = () => {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  )
}
