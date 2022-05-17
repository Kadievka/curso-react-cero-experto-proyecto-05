import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserContextInterface from '../../interfaces/UserContextInterface';
import { UserContext } from './UserContext';

const NavBar = () => {

  const { user, setUser } = useContext(UserContext) as UserContextInterface ;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" data-testid="navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">useContent</NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            {
              user
              ?
              <NavLink
                to="/login"
                className="nav-item nav-link"
                onClick={() => setUser(null)}
                data-testid="navbar-logout-button"
              >
                Logout
              </NavLink>
              :
              <NavLink className="nav-item nav-link" to="/login" data-testid="navbar-login-button">Login</NavLink>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar