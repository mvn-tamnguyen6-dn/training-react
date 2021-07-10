import logo from './logo.svg';
import React from 'react'
import Circle from './Clock';

class Main extends React.Component {
  render() {
    return (
      <main class="page-main">
        <div class="container">
          <div class="main-content text-center">
            <Circle number={10}></Circle>
            <Circle number={20}></Circle>
            <Circle number={30}></Circle>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
