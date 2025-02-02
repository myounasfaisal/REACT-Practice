import React from 'react'

function Button({children,bgColor='black',color='white',onClick,className,...props}) {
  return (
    <button onClick={onClick} style={{backgroundColor:bgColor,color:color}} className={`${className}`}  >
{children}
    </button>
  )
}

export default Button