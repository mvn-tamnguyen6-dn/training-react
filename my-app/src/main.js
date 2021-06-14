import logo from './logo.svg';
import React from 'react'

class Main extends React.Component {
  render() {
    return (
      <main class="page-main">
        <div class="container">
          <div class="main-content text-center">
            <a href="/">
              <img src={logo} class="react-logo" alt="react-logo"/>
            </a>
            <h4 class="text-center">Hello React!</h4>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
