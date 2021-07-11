import React from 'react';
import Table from './table'

class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      form : {
        email : '',
        password: '',
        country: '',
        gender: '',
        information: ''
      },
      users: []
    }
  }

  changeInputValue(e) {
    this.setState(pre => ({
      form: {
        [e.target.name]: e.target.value
      }
    }))
  }

  submitForm(e) {
    e.preventDefault();
    const id = Math.floor( Math.random()*1000 )
    const user = { ...this.state.form, id: id };

    this.setState(prev => ({
      users: [
          ...prev.users,
          user
        ]
    }))
  }
  handleDelete = (id) => {
    this.setState(pre => ({
      users: pre.users.filter(item => item.id !== id)
    }))
  }

  render() {
    var heading = ['Email Address', 'Country', 'Gender', 'GeOther information', 'Action'];
    var body = this.state.users;
    return (
      <div className="form-page">
        <form className="form-register" onSubmit={e => { this.submitForm(e) }}>
          <h3>Register</h3>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="text" className="form-input" name="email" onChange={e => this.changeInputValue(e)}></input>
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input  className="form-input" type="password" name="password" onChange={e => this.changeInputValue(e)}></input>
          </div>
          <div className="form-group">
            <label className="form-label">Your country</label>
            <select className="form-input" name="country" onChange={e => this.changeInputValue(e)}>
              <option value="vietNam">VietNam</option>
              <option value="China">China</option>
              <option value="America">America</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" name="gender">Gender</label>
            <div>
              <input type="radio" name="gender" value="male" onChange={e => this.changeInputValue(e)}/>
              <label htmlFor="html">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={e => this.changeInputValue(e)}/>
              <label htmlFor="html">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Other information</label>
            <textarea name="information" onChange={e => this.changeInputValue(e)}></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
        <Table heading={heading} body={body} onHandleRemove={this.handleDelete}/>
      </div>
    );
  }
}
export default FormRegister;
