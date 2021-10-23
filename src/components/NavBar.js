import React from 'react'
import { Link } from 'react-scroll'
import '../styles/navbar.css'

function NavBar() {
  return (
    <div className="nav_bar">
      <div className="nav_bar_left">
        <Link
          to="home"
          smooth={true}
          className="nav_bar_item"
          activeClass="active"
        >
          Wei Jun Xia
        </Link>
      </div>
      <div className="nav_bar_right">
        <Link
          to="works"
          smooth={true}
          className="nav_bar_item"
          activeClass="active"
        >
          Works
        </Link>
        <Link
          to="contact"
          smooth={true}
          className="nav_bar_item"
          activeClass="active"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

export default NavBar
