import { Player } from './components/Player'
import { Audio } from './components/Audio'
export const App = () => {
  return (
    <div>
      <h1>Audio Player</h1>
      <Audio />
      <Player />
    </div>
  )
}
