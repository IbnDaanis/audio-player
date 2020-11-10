export const playAudio = async (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = await audioRef.current.play()
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play()
      })
    }
  }
}