import { useState } from 'react';
import './App.css';

function Square({val,setVal}){
  
  return (
  <button className='square' onClick={setVal}>
    {val}
  </button>
)}
function Board(){
  
  let [square,setSquare]=useState(Array(9).fill(null));

  function handleEvent(i){
    const squares=square.slice();
    squares[i]="X";
    setSquare(squares);
    
  }

  
return(
  <>

  <div className='board-row'>
    <Square val={square[0]} setVal={()=>handleEvent(0)} />
    <Square val={square[1]} setVal={()=>handleEvent(1)}/>
    <Square val={square[2]} setVal={()=>handleEvent(2)}/>
  </div>
  
  <div className='board-row'>
    <Square val={square[3]} setVal={()=>handleEvent(3)}/>
    <Square val={square[4]} setVal={()=>handleEvent(4)}/>
    <Square val={square[5]} setVal={()=>handleEvent(5)}/>
  </div>
  <div className='board-row'>
    <Square val={square[6]} setVal={()=>handleEvent(6)}/>
    <Square val={square[7]} setVal={()=>handleEvent(7)}/>
    <Square val={square[8]} setVal={()=>handleEvent(8)}/>
  </div>
        </>
)
}

function App() {
  return (
 <Board/>
  );
}

export default App;
