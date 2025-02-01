import React from 'react'
import { useState } from 'react'

function MouseTracker({render}) {
  const [mousePosition,setPosition]=useState({x:0,y:0});

  const handleMouseMove=(e)=>{
    setPosition({x:e.clientX,y:e.clientY});
  }
  
  return (
    <div onMouseMove={handleMouseMove}>
      {render(mousePosition)}
    </div>
  )
}

export default MouseTracker