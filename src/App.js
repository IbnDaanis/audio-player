import { useState, useRef } from 'react'
import { Player } from './components/Player'
import { Song } from './components/Song'
import { Library } from './components/Library'
import './styles/app.scss'
import data from './data'
export const App = () => {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(null)

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  const timeUpdateHandler = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({
      ...songInfo, currentTime: current, duration
    })
  }

  return (
    <div>
      <Song
        currentSong={currentSong}
      />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  )
}
