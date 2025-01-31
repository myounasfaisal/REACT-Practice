import React from 'react'
import { useState } from 'react'

function WrapperLogic(Component) {
  
  return   function WrappedComponent(props){

    const [counter,setCounter]=useState(0);    
      
        return(
            <Component {...props} counter={counter} changeCounter={()=>setCounter(counter+1)} />
        );
    };
  
}

export default WrapperLogic