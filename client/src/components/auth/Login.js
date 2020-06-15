import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
  
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  
  const { setAlert, alerts } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Incorrect email or password!') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({ email, password});
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