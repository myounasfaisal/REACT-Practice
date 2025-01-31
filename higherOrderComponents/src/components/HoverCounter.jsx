import React from 'react'
import WrapperLogic from './WrapperLogic'

function HoverCounter({counter,changeCounter}) {
    
  return (
    <div>
        <button onMouseOver={changeCounter} >
            Hover Me
        </button>

        Counter is {counter} 
    </div>
  )
}

export default WrapperLogic(HoverCounter,5)