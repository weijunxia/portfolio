import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

function NavBar() {
  return (
    <div className="nav_bar">
      <div className="nav_bar_left">
        <NavLink to="/" className="nav_bar_item">
          Wei Jun Xia
        </NavLink>
      </div>
      <div className="nav_bar_right">
        <NavLink to="/works" className="nav_bar_item">
          Works
        </NavLink>
        <NavLink to="/blog" className="nav_bar_item">
          Blog
        </NavLink>
        <NavLink to="/contact" className="nav_bar_item">
          Contact
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar
