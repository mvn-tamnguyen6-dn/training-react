import logo from './logo.svg';
import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header class="page-header">
        <div class="container flex-box justify-content-space-between">
          <a class="flex-box" href="#"><img class="logo" src={logo} alt="Logo"/></a>
          <nav class="navbar flex-space-evenly">
            <ul class="nav-list">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Category</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sale</a>
              </li>
            </ul>
          </nav>
          <div class="flex-box align-items-center">
            <button class="btn btn-login">Login</button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
