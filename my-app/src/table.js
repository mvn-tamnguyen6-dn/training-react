import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove = (data) => {
    this.props.onHandleRemove(data)
  }

  render() {
    var heading = this.props.heading;
    var body = this.props.body;
    return (
      body !== [] ?
      <div className="box-table">
        <table className="table p-2">
          <thead>
            <tr>
              {heading.map(head => <th>{head}</th>)}
            </tr>
          </thead>
          <tbody>
            {body.map(row => <TableRow onHandleRemove={this.handleRemove} row={row} />)}
          </tbody>
        </table>
      </div>
      : <p>Not found Data</p>
    );
  }
}
class TableRow extends React.Component {

  constructor(props) {
    super(props);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.onHandleRemove(this.props.row.id)
  }

  render() {
    var row = this.props.row;
    return (
      <tr key={row.id}>
        <td className="txt-center">
          {row.email}
        </td>
        <td className="txt-center">
          {row.country}
        </td>
        <td className="txt-center">
          {row.gender}
        </td>
        <td className="txt-center">
          {row.information}
        </td>
        <td className="txt-center">
          <button className="btn btn-danger" onClick={e => {this.handleRemove(e)}}><i className="fa fa-trash"></i></button>
        </td>
      </tr>
    )
  }
}
export default Table;
