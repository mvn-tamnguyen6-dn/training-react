import React from 'react';

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.countDown = this.countDown.bind(this);
    this.state = {
      currentCount: this.props.number,
      interval: null,
      btn: 'STOP'
    };
  }

  countDown() {
    console.log('s', );
    var count = this.state.currentCount - 1;
    if(this.state.currentCount <= 0) {
      this.setState({btn: 'START'});
      clearInterval(this.state.interval);
    } else {
      this.setState({currentCount: count})
    }
  }

  componentDidMount() {
    this.startCount();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  toggleAction() {
    this.setState(
      { btn : this.state.btn === 'STOP' ? 'START' : 'STOP'}
    );
    if (this.state.btn === 'STOP') {
      clearInterval(this.state.interval);
    } else {
      this.startCount();
    }
  }

  startCount() {
    const interval = setInterval(this.countDown, 1000); 
    this.setState({interval: interval})
  }

  render() {
    return (
      <div className="circle-wrap">
        <button className="btn circle-btn" onClick={() => this.toggleAction()}>{this.state.btn}</button>
        <div className="circle-item">{this.state.currentCount}</div>
      </div>
    )
  }
}
export default Circle;
