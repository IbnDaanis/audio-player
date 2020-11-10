import { useState, useRef } from 'react'
import { Player } from './components/Player'
import { Song } from './components/Song'
import { Library } from './components/Library'
import './styles/app.scss'
import data from './data'
import { Nav } from './components/Nav'
export const App = () => {
  const audioRef = useRef(null)
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false)

  const timeUpdateHandler = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage
    })
    console.log(animationPercentage)
  }

  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song
        currentSong={currentSong}
      />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
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
