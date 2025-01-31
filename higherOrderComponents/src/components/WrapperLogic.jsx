import React from 'react'
import { useState } from 'react'

function WrapperLogic(Component,incrementBy=1) {
  
  return   function WrappedComponent(props){

    const [counter,setCounter]=useState(0);    
      
        return(
            <Component {...props} counter={counter} changeCounter={()=>setCounter(counter+incrementBy)} />
        );
    };
  
}

export default WrapperLogic