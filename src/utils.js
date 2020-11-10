export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play()
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        audioRef.current.play()
      }).catch(error => {
        audioRef.current.pause()
        console.log(error)
      })
    }
  }
}