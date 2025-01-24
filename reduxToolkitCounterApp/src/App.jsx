import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment, multiply } from './redux/slicers/counterSlicer'

function App() {
  const [multiplier,setMultiplier]=useState(0);
  const count=useSelector((state)=>state.counter.value);
  const Dispatch=useDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
    <input type="number" value={multiplier} onInput={(e)=>setMultiplier(parseInt(e.target.value ? e.target.value : 0))} />
    
    <button onClick={()=>{Dispatch(multiply(multiplier))}}>
          Multiply
        </button>

        <button onClick={()=>{Dispatch(increment())}}>
          +
        </button>
        <p>count is {count}</p>
        <button onClick={()=>{Dispatch(decrement())}}>
          -
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
