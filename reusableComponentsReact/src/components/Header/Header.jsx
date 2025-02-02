import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between items-center  '>
        <NavLink className='bg-amber-200 rounded-2xl p-2.5 font-bold' to="/">
            Controlled Input
        </NavLink>
        <NavLink className='bg-amber-200 rounded-2xl p-2.5 font-bold' to="uncontrolled">
            UnControlled Input
        </NavLink>
    </header>
  )
}

export default Header