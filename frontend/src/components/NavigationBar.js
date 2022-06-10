import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter, Link } from 'react-router-dom'
import { Menu, Header, Icon, Dropdown } from 'semantic-ui-react'
import { logOut } from '../actions/user.js'

const logout = (func) => {
  localStorage.removeItem('jwt')
  func()
}

const NavigationBar = (props) => {
  const loggedIn = props.user.loggedIn
  const pathname = props.location.pathname
  const logOut = props.logOut
  console.log(props.user)
  return (  
  <Fragment>
      {loggedIn ? (
        <Fragment>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Reactrails</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="text-right mx-5" id="navbarColor01">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Your profile
                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="/profile">Profile</a></li>
                        <li><a class="dropdown-item" href="/trips/">My trips</a></li>
                        <li><a class="dropdown-item" href="/reviews/">My Reviews</a></li>
                        <li><a class="dropdown-item" href="/listings/new">Create a listing</a></li>
                        <li><a class="dropdown-item" href="/reservations/">My Reservations</a></li>
                        <hr/>
                        <li><a class="dropdown-item" href="/" onClick={() => {logout(logOut)}}>Logout</a></li>

                      </ul>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>
        </Fragment>
      ) : (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Reactrails</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="text-right" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

      )}
</Fragment>
  )
}

const mapStateToProps = ({ usersReducer: user }) => ({ user })

export default withRouter(connect(mapStateToProps, { logOut })(NavigationBar))
