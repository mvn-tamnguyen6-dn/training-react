import logo from './logo.svg';
import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <div className="container flex-box justify-content-space-between">
          <a className="flex-box" href="#"><img className="logo" src={logo} alt="Logo"/></a>
          <nav className="navbar flex-space-evenly">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Category</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sale</a>
              </li>
            </ul>
          </nav>
          <div className="flex-box align-items-center">
            <button className="btn btn-login">Login</button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
