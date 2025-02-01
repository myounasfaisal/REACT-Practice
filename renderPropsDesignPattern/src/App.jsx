
import './App.css'
import MouseTracker from './components/MouseTracker'
import Render from './components/Render'

function App() {


  return (
    <>
      <MouseTracker render={Render} />
    </> 
  )
}

export default App
