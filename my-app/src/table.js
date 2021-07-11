import React from 'react';

export default function Table(props) {

  var {heading, body} = props;

  const handleRemove = (data) => {
    props.onHandleRemove(data)
  }

  return (
    body !== [] ?
    <div className="box-table">
      <table className="table p-2">
        <thead>
          <tr>
            {heading.map(head => <th key={head}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map(row => <TableRow key={row.id} onHandleRemove={handleRemove} row={row} />)}
        </tbody>
      </table>
    </div>
    : <p>Not found Data</p>
  );
}
const TableRow = (props) => {

  const handleRemove = (e) => {
    e.preventDefault();
    props.onHandleRemove(props.row.id)
  }

  var {row} = props;
  return (
    <tr>
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
        <button className="btn btn-danger" onClick={e => {handleRemove(e)}}><i className="fa fa-trash"></i></button>
      </td>
    </tr>
  )
}
