import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header>

        <NavLink style={{marginRight:"50px"}} to={'/'}>
Full Post
        </NavLink>

        <NavLink to={'/noauthor'}>
Without Author Post
        </NavLink>


    </header>
  )
}

export default Header