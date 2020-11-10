import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause, } from '@fortawesome/free-solid-svg-icons'

export const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setSongs }) => {
  useEffect(() => {
    const newSongs = songs.map(song => {
      if (song.id === currentSong.id) {
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
    if (isPlaying) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play()
        })
      }
    }
  }, [currentSong])

  const playSongHandler = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }

  const getTime = time => {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
  }

  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    if (direction === 'skip-forward') {
      setCurrentSong(songs[(currentIndex + 1) % songs.length])
    } else if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1])
        return
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length])
    }
  }
  return (
    <div className='player'>
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className='skip-back'
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className='skip-forward'
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  )
}
