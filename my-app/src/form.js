import React, { useState } from 'react';
import Table from './table'

export default function FormRegister(props) {
  const [form, setForm] = useState({
    email : '',
    password: '',
    country: '',
    gender: '',
    information: ''
  });
  const [users, setUser] = useState([])

  const changeInputValue = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
  }

  const submitForm = (e) => {
    e.preventDefault();
    const id = Math.floor( Math.random()*1000 )
    const user = { ...form, id: id };
    setUser([...users, user])
  }
  
  const handleDelete = (id) => {
    setUser(users.filter(item => item.id !== id))
  }

  var heading = ['Email Address', 'Country', 'Gender', 'GeOther information', 'Action'];
  var body = users;
  return (
    <div className="form-page">
      <form className="form-register" onSubmit={e => { submitForm(e) }}>
        <h3>Register</h3>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="text" className="form-input" name="email" onChange={e => changeInputValue(e)}></input>
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input  className="form-input" type="password" name="password" onChange={e => changeInputValue(e)}></input>
        </div>
        <div className="form-group">
          <label className="form-label">Your country</label>
          <select className="form-input" name="country" onChange={e => changeInputValue(e)}>
            <option value="vietNam">VietNam</option>
            <option value="China">China</option>
            <option value="America">America</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" name="gender">Gender</label>
          <div>
            <input type="radio" name="gender" value="male" onChange={e => changeInputValue(e)}/>
            <label htmlFor="html">Male</label>
          </div>
          <div>
            <input type="radio" name="gender" value="female" onChange={e => changeInputValue(e)}/>
            <label htmlFor="html">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Other information</label>
          <textarea name="information" onChange={e => changeInputValue(e)}></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <Table heading={heading} body={body} onHandleRemove={handleDelete}/>
    </div>
  );
}
