  import React from 'react'
  import WrapperLogic from './WrapperLogic';

  function ClickCounter(props) {
      const{counter,changeCounter}=props;
    return (
      <div>
          <button onClick={changeCounter}>Click</button>
          Count is {counter}
      </div>
    )
  }

  export default WrapperLogic(ClickCounter);