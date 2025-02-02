import React from 'react'

function Button({children,onClick,className,...props}) {
  return (
    <button onClick={onClick} className={`${className}`}  >
{children}
    </button>
  )
}

export default Button