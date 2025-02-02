import React from 'react'

function Input({type='text',name="inputField",className='' ,...props},ref) {
  return (
    <input type={type} name={name} className={`${className}`} ref={ref}  {...props} />
  )
}

export default React.forwardRef(Input);