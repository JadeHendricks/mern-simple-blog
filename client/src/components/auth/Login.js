import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Login = () => {

  
  const alertContext = useContext(AlertContext);
  const { setAlert, alerts } = alertContext;

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      setAlert('Please enter in all fields', 'danger');
    } else {
      console.log('Logged in');
    }
  }

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
          <h1 className="mt-5 mb-3 h1">Log in</h1>
          <form onSubmit={ onSubmit }>
              <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" placeholder="you@example.com" value={ email } className="form-control" id="email" name="email" onChange={ onChange }/>
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" value={ password } placeholder="••••••••" id="password" name="password" onChange={ onChange } />
              </div>
              <button type="submit" className="btn btn-primary">Log in</button>
          </form>
      </div>
    </div>
  )
}

export default Login;