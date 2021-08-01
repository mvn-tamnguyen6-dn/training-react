import logo from './logo.svg';
import Users from './Users'
import React from 'react'

class Main extends React.Component {
  render() {
    return (
      <main className="page-main">
        <div className="container">
          <Users />
        </div>
      </main>
    );
  }
}

export default Main;
