import logo from './logo.svg';
import React from 'react'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
      { id:1, color: 'red'},
      { id:2, color: 'black'},
      { id:3, color: 'yellow'},
      { id:4, color: 'red'},
      { id:5, color: 'yellow'}
      ]
    };
  }

  handleRemove = (id) => {
    this.setState(state => ({
      listItem: this.state.listItem.filter(item => item.id !== id)
    }));
  }
  
  render() {
    return (
      <ul className="list-item">
        {this.state.listItem.map((item) =>
          <ListItem key={item.id} value={item.id} bg={item.color} remove={this.handleRemove}/>
        )}
      </ul>
    );
  }
}

export default Main;
function ListItem(props) {
  return <li className="item">
    <div className="item-left" style={{backgroundColor: props.bg}}></div>
    <div className="item-center">
      <h2>This is title {props.value}</h2>
      <p>Lorem Ipsum is simply dummy text of the printing </p>
    </div>
    <div className="item-right">
      <button onClick={(e) => props.remove(props.value)} className="item-right-button">x</button>
    </div>
  </li>;
}
