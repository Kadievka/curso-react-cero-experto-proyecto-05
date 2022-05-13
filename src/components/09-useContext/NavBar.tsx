import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">useContent</NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar